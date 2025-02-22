"use strict";
{
    globalThis.C3.Plugins.Mikal_GIFPlayer.Type = class GIFPlayerType extends globalThis.ISDKObjectTypeBase {
        constructor() {
            super();
        }
        _onCreate() {
            this.runtime.assets.loadImageAsset(this.getImageInfo());
        }

        _loadTextures(renderer) {
            return renderer.loadTextureForImageInfo(this.getImageInfo(),
                {
                    linearSampling: this._runtime.IsLinearSampling()
                });
        }

        _releaseTextures(renderer) {
            renderer.releaseTextureForImageInfo(this.getImageInfo());
        }
    };
}