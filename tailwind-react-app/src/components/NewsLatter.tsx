export const NewsLatter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240] mx-auto md:flex justify-between py-[50px]">
        <div className="m-2">
          <h1 className="tex-[20px] md:text-[40px] font-bold text-white">
            Explore our New Design
          </h1>
          <span className="text-white">Sign In</span>
        </div>
        <div className="m-2">
          <input type="text" className=" sm:w-full p-3 mr-2 mb-2 text-slate-600 rounded" placeholder="Email"/>
          <button className='bg-black text-white p-3 rounded'>Shop Now</button> 
          <br/>
          <p className="text-white">
         textile items is crucial to maintaining their quality,<br/><a href=''  className="text-black">Return/Exchange Policy</a>
            </p>       
        </div>
      </div>
    </div>
  );
};
