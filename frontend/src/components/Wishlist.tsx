import { useWishlistItemsQuery } from "../generated/graphql";

export default function Wishlist() {
  const { data, loading, error } = useWishlistItemsQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Oops: {error.message}</div>;

  interface WishlistItem {
    id: string;
    name: string;
    description?: string | null;
    imageUrl?: string | null;
    price?: number | null;
  }

  const items = data?.wishlistItems ?? [];
  const PLACEHOLDER =
    "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lmdHxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="min-h-screen py-2 px-2 mx-auto bg-[#EA4B09]">
      <div className="flex justify-between text-[#FDFBF6] p-3">
        <div className="flex items-center">
          <span className="mr-1 text-2xl ">♥</span>
          <h2 className="text-xl font-bold tracking-wide">Ma wishlist</h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 bg-[#019645] text-[#FDFBF6] font-semibold px-4 py-2 rounded-xl hover:bg-[#01803b] transition"
        >
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FDFBF6] text-[#019645] font-bold">
            +
          </span>
          Nouvelle idée
        </button>
      </div>
      <div className="px-4">
        <ul className="grid pb-5 gap-4 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
          {items.map((i: WishlistItem) => (
            <li key={i.id} className="border rounded p-3">
              <img
                src={i.imageUrl ?? PLACEHOLDER}
                alt={i.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <div className="font-medium">{i.name}</div>
              {i.description && <p className="text-sm opacity-80">{i.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
