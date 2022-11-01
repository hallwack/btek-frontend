const LayoutSidebar = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-sky-100 flex flex-col items-center justify-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-primary/30 text-neutral gap-2">
          <div className="mb-8 ml-4">
            <h1 className="text-3xl font-bold">BTEK</h1>
          </div>
          <li className="hover:bg-primary/50 hover:rounded-lg">
            <a>Sidebar Item 1</a>
          </li>
          <li className="hover:bg-primary/50 hover:rounded-lg">
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LayoutSidebar;
