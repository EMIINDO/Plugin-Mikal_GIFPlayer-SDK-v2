"use strict";
{
    const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.Mikal_GIFPlayer;

    PLUGIN_CLASS.Type = class GIFPlayerType extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}