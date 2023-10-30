package com.practicaweb.apirest.utils;

import java.util.HashMap;
import java.util.Map;

public class CreateJSONResponse {
    public static Map<String, Object> createOkResponse(String message, Object data) {
        Map<String, Object> json = new HashMap<>();

        json.put("code", 200);

        json.put("message", message);

        json.put("data", data);

        return json;
    }

    public static Map<String, Object> createErrorResponse(String message, Object data) {
        Map<String, Object> json = new HashMap<>();

        json.put("code", 500);

        json.put("message", message);

        json.put("data", data);

        return json;
    }
}
