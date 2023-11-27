import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Table from './Table'

const Beats = () => {
  return (
    <div className="mx-16">
      <div className="my-10 flex justify-between items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search beat..."
            className="py-2 pl-8 pr-4 w-[340px] h-[38px] rounded-xl border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
            //   onChange={({ target }) => {
            //     setSearchTerm(target.value);
            //     setFilterTerm("");
            //   }}
          />
          <div className="absolute right-3 top-3">
            <MagnifyingGlassIcon className="w-6 h-6 text-darkGray" />
          </div>
        </div>
        <div className="bg-customBlack flex gap-4 items-center rounded-xl p-1 text-customWhite ">
          <PlusIcon className="h-10 w-10 text-customWhite font-semibold" />
          <p className="mx-2"> Upload Beat</p>
        </div>
      </div>
      <div className="my-14">
        <Table totalItems="10" />
      </div>
    </div>
  );
};

export default Beats;
