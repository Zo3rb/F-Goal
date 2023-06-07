create_category_schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string", "maxLength": 45}
    },
    "required": ["name"]
}