import Link from "next/link";
import { CiYoutube } from "react-icons/ci";

const Anthem = () => {
  return (
    <div className="mx-auto max-w-4xl text-start">
      <h1
        id="anthem"
        className="my-2 text-2xl font-bold text-yellow-500 md:text-3xl"
      >
        The National Anthem
      </h1>
      <div className="my-4 flex flex-col items-center justify-start gap-3 bg-gray-900 p-5">
        <p className="leading-7">
          God bless our homeland Ghana, And make our nation great and strong,
          Bold to defend for ever, The cause of Freedom and of Right. Fill our
          hearts with true humility Make us cherish fearless honesty, And help
          us to resist oppressor’s rule With all our will and might for
          evermore.
        </p>

        <p className="leading-7">
          Hail to thy name, O Ghana, To thee we make our solemn vow: Steadfast
          to build together A nation strong in Unity; With our gifts of mind and
          strength of arm, Whether night or day, in mist or storm, In every need
          what’er the call may be, To serve thee, Ghana, now and evermore.
        </p>
        <p className="leading-7">
          Raise high the flag of Ghana And one with Africa advance; Black star
          of hope and honour, To all who thirst for liberty; Where the banner of
          Ghana freely flies, May the way of freedom truly lie Arise, arise, O
          sons of Ghanaland, And under God march on for evermore. Raise high the
          flag of Ghana And one with Africa advance; Black star of hope and
          honour, To all who thirst for liberty; Where the banner of Ghana
          freely flies, May the way of freedom truly lie Arise, arise, O sons of
          Ghanaland, And under God march on for evermore.
        </p>
        <Link
          href="https://youtu.be/T1d1GSZ9m5w"
          target="_blank"
          className="flex items-center justify-center gap-2 text-sm text-yellow-500 hover:cursor-pointer hover:text-yellow-400 hover:underline"
        >
          Listen to the anthem
          <CiYoutube className="h-7 w-7" />
        </Link>
      </div>
    </div>
  );
};

export default Anthem;
