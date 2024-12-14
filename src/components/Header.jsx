const Header = () => {
  return (
    <div className="flex flex-col gap-8 w-[400px] h-[208px] bg-dark_20">
      <div className="flex justify-center items-center text-center">
        <h2 className="mt-12 text-dark_60 font-medium">
          <span className="text-brand_color">Code</span>Lab
        </h2>
      </div>
      <div>
        <input
          className="w-[327px] mx-6 h-[49px] p-4 font-serif text-sm text-dark_50 bg-dark_30 border-2 border-dark_40 rounded-md"
          type="text"
          placeholder="Pesquisar no blog"
        />
      </div>
    </div>
  );
};

export default Header;
