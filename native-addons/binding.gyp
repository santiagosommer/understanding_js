{
    # Items to build
    "targets": [
        {
            "target_name": "greeting",  # Built module name(greeting.node)
            "sources": [
                "src/greeting.cpp"  # Source files we are going to build
            ],
            "include_dirs": [
                # External libs
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').gyp\")"  # Load first
            ],
            "cflags_cc!": [
                "-fno-exceptions"
            ],
            "xcode_settings": {
                "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
                "CLANG_CXX_LIBRARY": "libc++",
                "MACOSX_DEPLOYMENT_TARGET": "10.7"
            }
        }
    ]
}
