import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { WishlistItem } from "../types/WishlistItem";
import { AddWishlistItemInput } from "../inputs/AddWishlistItemInput";
// generating random IDs for wishlist items, temporarily
import { randomUUID } from "crypto";

@Resolver()
export default class WishlistResolver {

    // in-memory store
    private static items: WishlistItem[] = [
        {
            id: "1",
            name: "Noise-cancelling headphones",
            description: "Over-ear, comfy for long sessions",
            imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0876.jpg",
            listId: "demo-list",
            userId: "demo-user",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "2",
            name: "Nintendo Switch Console",
            description: "Neon Blue/Red Joy-Con edition",
            imageUrl: "https://www.shutterstock.com/image-photo/cheshire-england-august-7th-2018-260nw-1173580291.jpg",
            listId: "demo-list",
            userId: "demo-user",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "3",
            name: "Mario Kart 8 Deluxe",
            description: "Multiplayer racing fun for the Switch",
            imageUrl: "https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/12_0045496420246_jm.jpg",
            listId: "demo-list",
            userId: "demo-user",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "4",
            name: "The Legend of Zelda: Breath of the Wild",
            description: "Open-world adventure game",
            imageUrl: "https://i5.walmartimages.com/asr/88fdeff7-b5c7-4dc1-9d30-66217f20f86c.3d08635afa4636f1074ae99ebf602b92.jpeg",
            listId: "demo-list",
            userId: "demo-user",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: "5",
            name: "Nintendo Switch Pro Controller",
            description: "Ergonomic controller for long gaming sessions",
            imageUrl: "https://m.media-amazon.com/images/I/71Eeyub6v6L.jpg",
            listId: "demo-list",
            userId: "demo-user",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    @Query(() => [WishlistItem])
    async wishlistItems(): Promise<WishlistItem[]> {
        // newest first
        return WishlistResolver.items;
    }


}