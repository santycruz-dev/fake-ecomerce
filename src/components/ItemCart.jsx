import { Link } from "react-router-dom"

const ItemCart = ({ item }) => {
  return (
    <Link to={`/products/${item.id}`}>
      <li className="rounded-3xl p-5 flex flex-col items-center bg-[#eeeee6]">
        <figure className="w-14 md:w-20 pb-4">
          <img className="w-full object-cover " src={item.image} alt={item.description} />
        </figure>
        <div className="text-center">
          <h3 className="pb-4 font-medium uppercase">{item.title}</h3>
          <h4 className="pb-4 text-gray-500 uppercase" >{item.category}</h4>
          <p className="tracking-widest">{item.price}</p>
        </div>
      </li>
    </Link>
  )
}

export default ItemCart