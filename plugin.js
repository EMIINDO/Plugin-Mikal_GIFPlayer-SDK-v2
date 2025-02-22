"use strict";
// Porting BY EMI INDO with c3addon-ide-plus
{

    const PLUGIN_ID = "Mikal_GIFPlayer";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.1";
    const PLUGIN_CATEGORY = "general";

    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.Mikal_GIFPlayer = class GIFPlayerPlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Mikal");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetPluginType("world"); // mark as world plugin, which can draw
            this._info.SetIsResizable(true); // allow to be resized
            this._info.SetIsRotatable(true); // allow to be rotated
            this._info.SetHasImage(true);
            this._info.SetSupportsEffects(true); // allow effects
            this._info.SetMustPreDraw(true);
            this._info.AddCommonPositionACEs();
            this._info.AddCommonAngleACEs();
            this._info.AddCommonAppearanceACEs();
            this._info.AddCommonZOrderACEs();
            this._info.AddCommonSizeACEs();

            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                new SDK.PluginProperty("link", "edit-image",
                    {
                        linkCallback: function (sdkType) {
                            sdkType.GetObjectType().EditImage();
                        },
                        callbackType: "once-for-type"
                    })
            ]);

            this._info.AddFileDependency(
                {
                    filename: "c3runtime/GIFGroover.js",
                    type: "inline-script"
                });

            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}