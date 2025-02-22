"use strict";
{
    globalThis.C3.Plugins.Mikal_GIFPlayer.Acts = {
        async LoadFile(filename)
        {
            //implementation
            let fileURI = await this.assetManager.GetProjectFileUrl(filename)
            if (this.gif !== null)
            {
                this.gif.pause()
                this.gif = null
            }
            this.gif = GIFGroover()
            this.gif.src = fileURI
            this.gif.onload = this.gifLoad
            this.gif.onError = this.gifError
        },

        Play()
        {
            //implementation
            if (this.gif !== null) this.gif.play()
        },

        Pause()
        {
            //implementation
            if (this.gif !== null) this.gif.pause()
        },

        LoadUrl(uri)
        {
            //implementation
            if (this.gif !== null)
            {
                this.gif.pause()
                this.gif = null
            }
            this.gif = GIFGroover()
            this.gif.src = uri
            this.gif.onload = this.gifLoad
            this.gif.onError = this.gifError
        },

        Seek(time)
        {
            //implementation
            if (this.gif !== null) this.gif.seek(time)
        },

        SeekFrame(frameIndex)
        {
            //implementation
            if (this.gif !== null) this.gif.seekFrame(frameIndex)
        },

        SetSpeed(speed)
        {
            //implementation
            if (this.gif !== null) this.gif.playSpeed = speed
        }
    };
}