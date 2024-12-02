import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mb-20">
      <div className="font-sans rounded-xl border-solid border-2 p-1 mt-2 w-11/12 mx-auto">
        <div className="text-center text-white bg-purple-500 rounded-lg pt-32 pb-28">
          <div className="max-w-full">
            <h1 className="font-sans text-3xl font-extrabold w-2/3 mx-auto">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-8 text-sm text-white w-1/2 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex justify-center">
              <Link to='/dashboard'>
                <p className="btn lg:w-40 w-full bg-white text-purple-500 font-bold rounded-full flex justify-center items-center">
                  <span>Shop Now</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid border-2 border-zinc-200 rounded-xl -mt-20 p-2 mx-auto w-2/5 bg-base-100 bg-opacity-50">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1715418635878-7881e87a8cce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Hero;