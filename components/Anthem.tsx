import Link from "next/link";
import { CiYoutube } from "react-icons/ci";

const Anthem = () => {
  return (
    <div className="mx-auto max-w-4xl w-full text-start">
      <h1
        id="anthem"
        className="my-2 text-2xl font-bold text-yellow-500 md:text-3xl"
      >
        The National Anthem
      </h1>
      <div className="my-4 flex w-full flex-col items-start justify-start gap-3 bg-gray-900 p-5">
        <p className="leading-7">
          God bless our homeland Ghana,
          <br /> And make our nation great and strong,
          <br />
          Bold to defend for ever,
          <br /> The cause of Freedom and of Right.
          <br /> Fill our hearts with true humility,
          <br /> Make us cherish fearless honesty,
          <br /> And help us to resist oppressor’s rule,
          <br /> With all our will and might for evermore.
        </p>

        <p className="leading-7">
          Hail to thy name, O Ghana,
          <br /> To thee we make our solemn vow:
          <br /> Steadfast to build together,
          <br /> A nation strong in Unity;
          <br /> With our gifts of mind and strength of arm,
          <br /> Whether night or day, in mist or storm,
          <br /> In every need what’er the call may be,
          <br /> To serve thee, Ghana, now and evermore.
        </p>
        <p className="leading-7">
          Raise high the flag of Ghana
          <br /> And one with Africa advance;
          <br /> Black star of hope and honour,
          <br /> To all who thirst for liberty;
          <br /> Where the banner of Ghana freely flies,
          <br /> May the way of freedom truly lie
          <br /> Arise, arise, O sons of Ghanaland,
          <br /> And under God march on for evermore.
          <br /> Raise high the flag of Ghana
          <br /> And one with Africa advance;
          <br /> Black star of hope and honour,
          <br /> To all who thirst for liberty;
          <br /> Where the banner of Ghana freely flies,
          <br /> May the way of freedom truly lie
          <br /> Arise, arise, O sons of Ghanaland,
          <br /> And under God march on for evermore.
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
