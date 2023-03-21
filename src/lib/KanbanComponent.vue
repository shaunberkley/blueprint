<template>
    <!-- Component Start -->
    <div
        class="flex flex-col w-screen h-full overflow-y-hidden text-gray-700 bg-gray-50"
        :key="componentKey"
    >
        <div class="flex flex-grow px-10 mt-4 space-x-6">
            <div
                class="flex flex-col flex-shrink-0 w-full max-w-[300px] h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden"
            >
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Interests</span>
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30"
                        >{{ interestsReservations?.length }}</span
                    >
                </div>
                <div class="flex flex-col pb-2 overflow-auto pr-2">
                    <ul class="flex flex-col pb-28 overflow-auto pr-2">
                        <KanbanCardComponent
                            v-for="reservation in interestsReservations"
                            :reservation="reservation"
                            @updated="update($event.reservation, $event.status)"
                            @sendWaitlistEmail="sendWaitlistEmail($event)"
                        ></KanbanCardComponent>
                    </ul>
                </div>
            </div>
            <div
                class="flex flex-col flex-shrink-0 w-full max-w-[300px] h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden"
            >
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold"
                        >Accepted Reservations</span
                    >
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30"
                        >{{ acceptedReservations?.length }}</span
                    >
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <ul class="flex flex-col pb-28 overflow-auto pr-2">
                        <KanbanCardComponent
                            v-for="reservation in acceptedReservations"
                            :reservation="reservation"
                            @updated="update($event.reservation, $event.status)"
                        ></KanbanCardComponent>
                    </ul>
                </div>
            </div>
            <div
                class="flex flex-col flex-shrink-0 w-full max-w-[300px] h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden"
            >
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold"
                        >Confirmed Reservations</span
                    >
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30"
                        >{{ confirmedReservations?.length }}</span
                    >
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <ul class="flex flex-col pb-28 overflow-auto pr-2">
                        <KanbanCardComponent
                            v-for="reservation in confirmedReservations"
                            :reservation="reservation"
                            @updated="update($event.reservation, $event.status)"
                        ></KanbanCardComponent>
                    </ul>
                </div>
            </div>
            <div
                class="flex flex-col flex-shrink-0 w-full max-w-[300px] h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden"
            >
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold"
                        >Declined Reservations</span
                    >
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30"
                        >{{ declinedReservations?.length }}</span
                    >
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <ul class="flex flex-col pb-28 overflow-auto pr-2">
                        <KanbanCardComponent
                            v-for="reservation in declinedReservations"
                            :reservation="reservation"
                            @updated="update($event.reservation, $event.status)"
                        ></KanbanCardComponent>
                    </ul>
                </div>
            </div>
            <div
                class="flex flex-col flex-shrink-0 w-full max-w-[300px] h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden"
            >
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold"
                        >Waitlisted Reservations</span
                    >
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30"
                        >{{ waitlistReservations?.length }}</span
                    >
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <ul class="flex flex-col overflow-auto pr-2 pb-28">
                        <KanbanCardComponent
                            v-for="reservation in waitlistReservations"
                            :reservation="reservation"
                            @updated="update($event.reservation, $event.status)"
                            @sendWaitlistEmail="sendWaitlistEmail($event)"
                        ></KanbanCardComponent>
                    </ul>
                </div>
            </div>
            <div class="flex-shrink-0 w-6"></div>
        </div>
    </div>
    <!-- Component End -->
</template>

<script lang="ts">
import { computed, onMounted, ref, type ComputedRef } from "vue";
import KanbanCardComponent from "../components/KanbanCardComponent.vue";
import { sendEmail } from "../core/functions/email";
import { supabase } from "../core/functions/supabase";
import type { SendEmailRequest } from "../core/types/email.model";
import type { Reservation, WeatherResponse } from "../core/types/games.model";
import { useAuthStore } from "../store/auth";

export default {
    components: {
        KanbanCardComponent,
    },
    setup() {
        const reservations = ref<Reservation[]>();
        const selectedReservation = ref<Reservation>();
        const selectedReservationWeather = ref<WeatherResponse>();
        const selectedReservationLoading = ref<boolean>(false);

        const componentKey = ref<number>(0);

        const confirmedGames: ComputedRef<number[]> = computed(() => {
            const res = reservations.value
                ?.filter((res: Reservation) => res.status === "confirmed")
                .map((res: Reservation) => res.game.id) as number[];
            return [...new Set(res)];
        });

        const acceptedGames: ComputedRef<number[]> = computed(() => {
            const res = reservations.value
                ?.filter((res: Reservation) => res.status === "accepted")
                .map((res: Reservation) => res.game.id) as number[];
            return [...new Set(res)];
        });

        console.log(acceptedGames);

        const confirmedReservations: ComputedRef<Reservation[] | undefined> =
            computed(() => {
                const res = reservations.value
                    ?.filter((res: Reservation) => res.status === "confirmed")
                    .sort((a: Reservation, b: Reservation) => {
                        return a.game_date && b.game_date
                            ? a.game_date.valueOf() > b.game_date.valueOf()
                                ? 1
                                : -1
                            : 0;
                    });
                return res;
            });

        const acceptedReservations: ComputedRef<Reservation[] | undefined> =
            computed(() => {
                const res = reservations.value
                    ?.filter((res: Reservation) => res.status === "accepted")
                    .sort((a: Reservation, b: Reservation) => {
                        return a.game_date && b.game_date
                            ? a.game_date.valueOf() > b.game_date.valueOf()
                                ? 1
                                : -1
                            : 0;
                    });
                return res;
            });

        const waitlistReservations: ComputedRef<Reservation[] | undefined> =
            computed(() => {
                const res = reservations.value
                    ?.filter((res: Reservation) => {
                        console.log(res.game.id);
                        return (
                            (confirmedGames.value.includes(res.game.id) ||
                                acceptedGames.value.includes(res.game.id)) &&
                            res.status === "pending"
                        );
                    })
                    .sort((a: Reservation, b: Reservation) => {
                        return a.game_date && b.game_date
                            ? a.game_date.valueOf() > b.game_date.valueOf()
                                ? 1
                                : -1
                            : 0;
                    });
                return res;
            });

        const interestsReservations: ComputedRef<Reservation[] | undefined> =
            computed(() => {
                const res = reservations.value
                    ?.filter(
                        (res: Reservation) =>
                            !confirmedGames.value.includes(res.game.id) &&
                            !acceptedGames.value.includes(res.game.id) &&
                            res.status === "pending"
                    )
                    .sort((a: Reservation, b: Reservation) => {
                        return a.game_date && b.game_date
                            ? a.game_date.valueOf() > b.game_date.valueOf()
                                ? 1
                                : -1
                            : 0;
                    });
                return res;
            });

        const declinedReservations: ComputedRef<Reservation[] | undefined> =
            computed(() => {
                return reservations.value
                    ?.filter((res: Reservation) => res.status === "declined")
                    .sort((a: Reservation, b: Reservation) => {
                        return a.game_date && b.game_date
                            ? a.game_date.valueOf() > b.game_date.valueOf()
                                ? 1
                                : -1
                            : 0;
                    });
            });

        onMounted(() => {
            getReservations();
        });

        async function getReservations(resetSelected?: boolean) {
            try {
                let { data, error, status } = await supabase
                    .from("reservations")
                    .select(
                        `
                        *,
                        profile(*),
                        game(*, away_team(*), reservations(*))                        
                    `
                    );
                if (error && status !== 406) throw error;
                if (data) {
                    reservations.value = data.map((res: Reservation) => {
                        return {
                            ...res,
                            game_date: res.game.date,
                        };
                    });

                    console.log(reservations.value);
                }
            } catch (error: any) {
                alert(error.message);
            } finally {
                selectedReservationLoading.value = false;
            }
            componentKey.value++;
        }

        async function sendWaitlistEmail(reservation: Reservation) {
            console.log("testtt wait");
            try {
                let statusMessage =
                    "Unfortunately somebody beat you to reserving this game. Please view the schedule to reserve another game.";
                const cta = "View schedule";
                const ctaLink = "https://truebluetickets.com/";

                console.log(statusMessage);

                const subject = `Your reservation for ${
                    new Date(reservation.game.date).getMonth() + 1
                }/${new Date(reservation.game.date).getDate()}/${new Date(
                    reservation.game.date
                ).getFullYear()} is waitlisted`;

                const heading = `Your reservation to see the ${
                    reservation.game.away_team.location
                } ${reservation.game.away_team.name} on ${
                    new Date(reservation.game.date).getMonth() + 1
                }/${new Date(reservation.game.date).getDate()}/${new Date(
                    reservation.game.date
                ).getFullYear()} is waitlisted.`;

                const bodyText = `${statusMessage}`;

                const sendEmailRequest: SendEmailRequest = {
                    sendEmail: [{ email: reservation.profile.email, name: "" }],
                    subject: subject,
                    sendName: "",
                    header: heading,
                    heading: heading,
                    bodyText: bodyText,
                    cta: cta,
                    ctaLink: ctaLink,
                };

                await sendEmail(
                    useAuthStore().currentUser?.access_token ?? "",
                    sendEmailRequest
                );
            } catch (error: any) {
                alert(error.message);
                return error;
            }
        }

        async function update(
            reservation: Reservation,
            status: "pending" | "confirmed" | "declined" | "accepted"
        ) {
            console.log(status);
            const { data } = await supabase
                .from("reservations")
                .update({ status: status })
                .eq("id", reservation.id);

            try {
                let statusMessage = "";
                let cta = "";
                let ctaLink = "";

                switch (status) {
                    case "pending":
                        statusMessage =
                            "Your reservation was moved to the pending state. You will receive a confirmation or denial for your reservation shortly.";
                        cta = "View your games";
                        ctaLink = "https://truebluetickets.com/my-games";
                        break;
                    case "declined":
                        statusMessage =
                            "The game was reserved by someone else or is unavailable. Please view the schedule and choose another game.";
                        cta = "View schedule";
                        ctaLink = "https://truebluetickets.com/";
                        break;
                    case "confirmed":
                        statusMessage =
                            "Your tickets will be sent to you shortly!";
                        cta = "View your games";
                        ctaLink = "https://truebluetickets.com/my-games";
                        break;
                    case "accepted":
                        statusMessage = `Please send payment of ${
                            reservation.game.ticket_price
                                ? "$" +
                                  reservation.game.ticket_price * 2 +
                                  ".00"
                                : "$340.00"
                        } via Venmo or Zelle. To pay, click the button below or scan one of the QR codes. Payments are required within 48 hours or your tickets may be released to someone else.`;
                        cta = `Pay with Venmo`;
                        ctaLink = `https://venmo.com/u/Shaun-Berkley`;
                        break;
                    default:
                        statusMessage = "";
                        cta = "View schedule";
                        ctaLink = "https://truebluetickets.com/";
                        break;
                }

                console.log(statusMessage);

                const subject = `Your reservation for ${
                    new Date(reservation.game.date).getMonth() + 1
                }/${new Date(reservation.game.date).getDate()}/${new Date(
                    reservation.game.date
                ).getFullYear()} is ${status}.`;

                const heading = `Your reservation to see the ${
                    reservation.game.away_team.location
                } ${reservation.game.away_team.name} on ${
                    new Date(reservation.game.date).getMonth() + 1
                }/${new Date(reservation.game.date).getDate()}/${new Date(
                    reservation.game.date
                ).getFullYear()} is ${status}.`;

                const bodyText = `${statusMessage}`;

                const sendEmailRequest: SendEmailRequest = {
                    sendEmail: [{ email: reservation.profile.email, name: "" }],
                    subject: subject,
                    sendName: "",
                    header: heading,
                    heading: heading,
                    bodyText: bodyText,
                    cta: cta,
                    ctaLink: ctaLink,
                    templateId:
                        status === "accepted"
                            ? "d-15ed969b12934354b4ca2975e40c84e3"
                            : undefined,
                };

                await sendEmail(
                    useAuthStore().currentUser?.access_token ?? "",
                    sendEmailRequest
                );
            } catch (error: any) {
                alert(error.message);
                return error;
            }

            await getReservations();
        }

        return {
            interestsReservations,
            confirmedReservations,
            declinedReservations,
            acceptedReservations,
            waitlistReservations,
            componentKey,
            update,
            sendWaitlistEmail,
        };
    },
};
</script>
