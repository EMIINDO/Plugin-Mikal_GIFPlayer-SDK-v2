"use strict";
{
    globalThis.C3.Plugins.Mikal_GIFPlayer.Exps = {
        Duration()
        {
            //implementation
            if (this.gif !== null) return this.gif.duration
            else return 0
        },

        FrameCount()
        {
            //implementation
            if (this.gif !== null) return this.gif.frameCount
            else return 0
        },

        CurrentTime()
        {
            //implementation
            if (this.gif !== null) return this.gif.currentTime
            else return 0
        },

        CurrentFrame()
        {
            //implementation
            if (this.gif !== null) return this.gif.currentFrame
            else return 0
        },

        PlaySpeed()
        {
            //implementation
            if (this.gif !== null) return this.gif.playSpeed
            else return 0
        },

        ErrorMessage()
        {
            //implementation
            return this.errorMessage
        },

        GIFWidth()
        {
            //implementation
            if (this.gif !== null) return this.gif.width
            else return 0
        },

        GIFHeight()
        {
            //implementation
            if (this.gif !== null) return this.gif.height
            else return 0
        }
    };
}