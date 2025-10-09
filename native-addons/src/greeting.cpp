#include <napi.h>

// This is the function we will expose
// Converts a C++ string into a valid JavaScript String
Napi::String Greeting(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    return Napi::String::New(env, "Greetings from C++!");
}

// Creates the binding between JS functions and native C++ functions
Napi::Object Init(Napi::Env env, Napi::Object exports)
{
    exports.Set("greeting", Napi::Function::New(env, Greeting));
    return exports;
}

// Registers the native module(greeting.node, the compiled binary)
// with the Init function. So when Node.js loads it, Init() creates the binding
// between the JS function and the native C++ function
NODE_API_MODULE(greeting, Init)