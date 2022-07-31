export default {
    name: 'restaurants',
    title: 'Restaurants',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'eta',
            title: 'ETA',
            type: 'string',
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
                {
                    title: "category",
                    type: "string"
                }
            ]
        },
        {
            name: "menuItems",
            title: "Menu Items",
            type: "array",
            of: [
                {
                    title: 'details',
                    type: 'object',
                    fields: [
                        {
                            title: 'title',
                            name: "foodName",
                            type: 'string',
                        },
                        {
                            title: 'price',
                            name: "price",
                            type: 'number',
                        },
                        {
                            title: 'image',
                            name: "foodImage",
                            type: "image",
                            options: {
                                hotspot: true,
                            },
                        }
                    ]
                },
            ]
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
