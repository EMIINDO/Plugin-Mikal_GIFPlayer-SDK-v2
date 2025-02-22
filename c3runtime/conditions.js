"use strict";
{
    globalThis.C3.Plugins.Mikal_GIFPlayer.Cnds = {
        Paused()
        {
            //implementation
            if (this.gif !== null) return this.gif.paused
            else return false
        },

        Loading()
        {
            //implementation
            if (this.gif !== null) return this.gif.loading
            else return false
        },

        Playing()
        {
            //implementation
            if (this.gif !== null) return this.gif.playing
            else return false
        },

        OnError()
        {
            //implementation
            return true
        },

        OnLoad()
        {
            //implementation
            return true
        },

        Loaded()
        {
            //implementation
            return this.loadComplete
        }
    };
}