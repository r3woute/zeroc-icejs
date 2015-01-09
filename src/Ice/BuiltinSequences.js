// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6b
//
// <auto-generated>
//
// Generated from file `BuiltinSequences.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

/* slice2js browser-bundle-skip */
(function(module, require, exports)
{
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
    var __M = require("../Ice/ModuleRegistry").Ice.__M;
    var Ice = __M.require(module, 
    [
        "../Ice/Object",
        "../Ice/Long",
        "../Ice/HashMap",
        "../Ice/HashUtil",
        "../Ice/ArrayUtil",
        "../Ice/StreamHelpers"
    ]).Ice;
    
    var Slice = Ice.Slice;
/* slice2js browser-bundle-skip-end */
    Slice.defineSequence(Ice, "BoolSeqHelper", "Ice.BoolHelper", true);
    Slice.defineSequence(Ice, "ByteSeqHelper", "Ice.ByteHelper", true);
    Slice.defineSequence(Ice, "ShortSeqHelper", "Ice.ShortHelper", true);
    Slice.defineSequence(Ice, "IntSeqHelper", "Ice.IntHelper", true);
    Slice.defineSequence(Ice, "LongSeqHelper", "Ice.LongHelper", true);
    Slice.defineSequence(Ice, "FloatSeqHelper", "Ice.FloatHelper", true);
    Slice.defineSequence(Ice, "DoubleSeqHelper", "Ice.DoubleHelper", true);
    Slice.defineSequence(Ice, "StringSeqHelper", "Ice.StringHelper", false);
    Slice.defineSequence(Ice, "ObjectSeqHelper", "Ice.ObjectHelper", false, "Ice.Object");
    Slice.defineSequence(Ice, "ObjectProxySeqHelper", "Ice.ObjectPrx", false);
/* slice2js browser-bundle-skip */
    exports.Ice = Ice;
/* slice2js browser-bundle-skip-end */
/* slice2js browser-bundle-skip */
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : window.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : window));
/* slice2js browser-bundle-skip-end */