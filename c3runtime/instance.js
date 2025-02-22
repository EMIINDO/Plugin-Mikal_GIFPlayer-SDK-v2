"use strict";
{
    globalThis.C3.Plugins.Mikal_GIFPlayer.Instance = class GIFPlayerInstance extends globalThis.ISDKWorldInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();

            this.assetManager = inst.GetRuntime().GetAssetManager()
            this.gif = null
            this.texture = null
            this.canvas = null
            this.loadComplete = false
            this.textureCreated = false
            this.texture = null
            this.errorMessage = null

            //this._testProperty = 0;

            if (properties) {
                //this._testProperty = properties[0];
            }

            var _this = this

            this.gifError = function (event) {
                _this.errorMessage = event.message
                _this._trigger(globalThis.C3.Plugins.Mikal_GIFPlayer.Cnds.OnError);
            }

            this.gifLoad = function (event) {
                const gif = event.gif
                _this.canvas = document.createElement("canvas")
                const canvas = _this.canvas
                canvas.id = 'GIFCanvas'
                canvas.width = gif.width // set canvas size to match the gif.
                canvas.height = gif.height
                canvas.style.position = 'absolute'
                canvas.style.top = "0px"
                canvas.style.left = "0px"
                canvas.style.zIndex = "-2000"
                _this.ctx = canvas.getContext("2d") // get a rendering context
                document.body.appendChild(canvas) // add canvas to the DOM
                requestAnimationFrame(displayGif) // start displaying the gif.
                // XXX Call trigger load complete
                _this.loadComplete = true
                _this._trigger(globalThis.C3.Plugins.Mikal_GIFPlayer.Cnds.OnLoad);

                // Display loop

                function displayGif() {
                    _this.ctx.clearRect(0, 0, canvas.width, canvas.height) // Clear in case the gif is transparent
                    _this.ctx.drawImage(gif.image, 0, 0) // The current frame
                    requestAnimationFrame(displayGif)
                }
            }

            this._StartTicking();
        }

        _release() {
            this.assetManager = null
            this.gif.pause()
            this.gif = null
            this.texture = null
            this.canvas = null
            this.loadComplete = null
            this.textureCreated = null
            this.texture = null
            this.errorMessage = null

            super._release();
        }

        _draw(renderer) {
            let texture = null
            const gif = this.gif
            let rcTex = null
            let imageInfo = null

            if (this.loadComplete && !this.textureCreated) {
                // Create dynamic texture once after GIF loaded
                this.texture = renderer.CreateDynamicTexture(gif.width, gif.height,
                    {
                        mipMap: false
                    })
                this.textureCreated = true
            }
            else if (this.texture === null) {
                // GIF not loaded use Animation editor image
                imageInfo = this._objectClass.getImageInfo()
                texture = imageInfo.getTexture(renderer); //()
                rcTex = imageInfo.getTexRect();
            }
            else {
                // GIF loaded, texture created, update texture from GIF Canvas
                renderer.UpdateTexture(this.canvas, this.texture,
                    {})
                texture = this.texture
                rcTex = new C3.Rect(0, 0, 1, 1)
            }

            if (!texture) return; // dynamic texture load which hasn't completed yet; can't draw anything

            const wi = getBoundingQuad();
            const quad = wi.GetBoundingQuad();

            renderer.setTexture(texture);

            if (this.runtime.IsPixelRoundingEnabled()) {
                const ox = Math.round(wi.this.x) - wi.this.x;
                const oy = Math.round(wi.this.y) - wi.this.y;
                tempQuad.copy(quad);
                tempQuad.offset(ox, oy);
                renderer.quad3(tempQuad, rcTex);
            }
            else {
                renderer.quad3(quad, rcTex);
            }
        }

        _tick() {
            // Assume updated every tick, once GIF is loaded.
            if (this.gifLoad) this.runtime.UpdateRender()
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }


    };
}