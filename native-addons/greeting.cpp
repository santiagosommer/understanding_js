#include <napi.h>

// This is the function we will expose
// It takes a C++ string and returns a valid JavaScript String
Napi::String Greeting(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    return Napi::String::New(env, "Greetings from C++!");
}

// Greeting init function
Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set("greeting", Napi::Function::New(env, Greeting));
    return exports;
}

// Defines the native module(greeting.node, which is built inside node files)
// binding with the Init function
NODE_API_MODULE(greeting, Init)