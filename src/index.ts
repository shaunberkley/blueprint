// import AutocompleteComponent from "./components/AutocompleteComponent.vue";
// import type { AutocompleteItem } from "./components/autocomplete.model";
import { App } from "vue";

import AvatarComponent from "./components/AvatarComponent.vue";
import BannerComponent from "./components/BannerComponent.vue";
import BreadcrumbsComponent from "./components/BreadcrumbsComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import CheckboxGroupComponent from "./components/CheckboxGroupComponent.vue";
import DatepickerComponent from "./components/DatepickerComponent.vue";
import DialogComponent from "./components/DialogComponent.vue";
import InputComponent from "./components/InputComponent.vue";
import LoaderComponent from "./components/LoaderComponent.vue";
import LoadingBarComponent from "./components/LoadingPulseBarComponent.vue";
import SelectComponent from "./components/SelectComponent.vue";
import TextareaComponent from "./components/TextareaComponent.vue";
import ToggleComponent from "./components/ToggleComponent.vue";
import TooltipComponent from "./components/TooltipComponent.vue";
import FolderNavigationComponent from "./components/FolderNavigationComponent.vue";

const VueBlueprint = {
    install: (app: App) => {
        app.component("AvatarComponent", AvatarComponent),
            app.component("BannerComponent", BannerComponent),
            app.component("BreadcrumbsComponent", BreadcrumbsComponent),
            app.component("CheckboxGroupComponent", CheckboxGroupComponent),
            app.component("DatepickerComponent", DatepickerComponent),
            app.component(
                "FolderNavigationComponent",
                FolderNavigationComponent
            ),
            app.component("InputComponent", InputComponent),
            app.component("LoadingBarComponent", LoadingBarComponent),
            app.component("LoaderComponent", LoaderComponent),
            app.component("SelectComponent", SelectComponent),
            app.component("TextareaComponent", TextareaComponent),
            app.component("ToggleComponent", ToggleComponent);
        app.component("TooltipComponent", TooltipComponent);
    },
};

export {
    AvatarComponent,
    BannerComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    CheckboxGroupComponent,
    DatepickerComponent,
    DialogComponent,
    FolderNavigationComponent,
    InputComponent,
    LoadingBarComponent,
    LoaderComponent,
    SelectComponent,
    TextareaComponent,
    ToggleComponent,
    TooltipComponent,
};

export default VueBlueprint;
