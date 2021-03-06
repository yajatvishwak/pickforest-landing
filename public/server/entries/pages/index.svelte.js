import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-1e54ea6c.js";
import { createClient } from "@supabase/supabase-js";
import "sweetalert";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{scroll-behavior:smooth}body::-webkit-scrollbar{width:12px}body::-webkit-scrollbar-track{@apply bg-yellow-100 /* color of the tracking area */;}body::-webkit-scrollbar-thumb{@apply bg-palette-yellow400;;border-radius:20px}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const supabaseUrl = "https://siqwcxzabkxjumvkabsv.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpcXdjeHphYmt4anVtdmthYnN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ1ODc2OTUsImV4cCI6MTk2MDE2MzY5NX0.T6WcpdrQVCP0H8VdkSiWXlD0prZ62abtyWqpMXPxkbc";
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  let email = "";
  setInterval(() => {
  }, 5e3);
  if ($$props.supabase === void 0 && $$bindings.supabase && supabase !== void 0)
    $$bindings.supabase(supabase);
  $$result.css.add(css);
  return `<section><div class="${"p-10 overflow flex-col md:flex-row gap-5 text-palette-yellow400 flex items-center justify-between"}"><div class="${"flex items-center gap-4"}"><svg width="${"60"}" height="${"60"}" viewBox="${"0 0 94 94"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M54.3438 8.8125C45.8264 8.8125 38.936 15.0117 37.324 23.0783C36.3982 23.3746 35.5055 23.7448 34.6505 24.177L29.375 11.75L26.4375 10.2812C26.4375 10.2812 22.0312 19.0938 16.1562 27.9062L22.0312 29.375L11.75 42.5938L19.0938 44.0625L8.8125 57.2813L16.1562 58.75L4.40625 71.9688C4.40625 71.9688 14.6875 73.4375 24.9688 73.4375V85.1875H32.3125V73.4375H48.5032C49.1276 73.481 49.747 73.4825 50.3994 73.4719L49.9375 85.1875H58.75L57.2755 47.8405L71.7507 35.9987L70.282 33.0612L57.0259 41.4979L56.5469 29.375H52.1406L51.3173 50.233L40.8152 44.5043L39.2804 47.2869L51.062 56.7104L50.6317 67.5883C49.7192 67.5859 48.5945 67.5602 48.7613 67.5769C42.0663 66.9073 38.6784 64.5025 36.5897 61.3806C34.5009 58.2587 33.7812 54.0765 33.7812 49.9375C33.7812 49.5923 33.8051 49.2119 33.8415 48.7872L33.939 47.6569L33.2505 46.7562C31.7394 44.7727 30.8437 42.3366 30.8437 39.6563C30.8437 33.9248 34.9083 29.2051 40.2902 28.1357L42.4675 27.7026L42.6454 25.488C43.1294 19.4276 48.1414 14.6875 54.3438 14.6875C59.2852 14.6875 63.4675 17.716 65.2188 21.9968L65.8212 23.4713L67.3875 23.7697C74.1741 25.0614 79.3125 30.99 79.3125 38.1875C79.3125 39.4072 78.4622 41.7485 77.468 43.572C76.4737 45.3955 75.4943 46.7074 75.4943 46.7074L74.7599 47.6856L74.9378 48.8962C75.5361 52.9658 74.7556 56.5478 72.8896 59.0254C71.0236 61.503 68.0631 63.1563 63.1563 63.1563V69.0313C69.5015 69.0313 74.5739 66.5544 77.5827 62.5596C80.3285 58.9139 81.1548 54.206 80.721 49.3953C81.0909 48.8803 81.6793 48.1192 82.6258 46.3832C83.8346 44.1662 85.1875 41.3682 85.1875 38.1875C85.1875 28.7271 78.6673 20.9191 69.9263 18.5458C67.012 12.8165 61.1837 8.81251 54.3438 8.81251V8.8125Z"}" fill="${"#F1C40F"}"></path></svg>
      <div class="${"text-3xl font-bold"}">PickForest</div></div>
    <div class="${"flex gap-5 md:gap-14 font-bold text-black"}"><a href="${"#about"}" class="${"cursor-pointer "}">About</a>
      <div class="${"cursor-pointer"}">Pricing</div></div>
    <div class="${"md:flex hidden gap-5 md:gap-14 items-center"}"><div class="${"hover:scale-90 transition-all font-bold cursor-pointer"}">Sign in
      </div>
      <div class="${"hover:scale-90 transition-all rounded-xl p-3 btn modal-button cursor-pointer bg-palette-yellow300 text-black font-bold px-10"}">Sign up
      </div></div></div>
  <div class="${"flex mt-5 md:mt-32 p-10 w-full justify-center items-center"}"><div class="${"flex flex-col gap-5 items-center justify-center"}"><div class="${"text-7xl md:text-8xl font-extrabold text-center max-w-xl"}">Make every <span class="${"text-palette-yellow400"}">post count</span></div>
      <div class="${"text-xl md:text-2xl text-palette-darkGray text-center max-w-xl"}">Get crowd sentiment before posting anything on the socials
      </div>
      <div class="${"flex gap-6 flex-col md:flex-row mt-10"}"><div class="${"hover:scale-90 transition-all text-center p-5 bg-palette-yellow300 rounded-2xl font-extrabold cursor-pointer"}">Get started
        </div>
        <a href="${"#signup"}" class="${"hover:scale-90 transition-all text-center p-5 bg-palette-yellow100 text-palette-yellow400 rounded-2xl font-extrabold cursor-pointer"}">Notify me when we launch
        </a></div></div></div>

  <div id="${"about"}" class="${"mt-32 mx-auto max-w-screen-lg flex flex-col md:flex-row "}"><div class="${"w-1/2 mx-auto md:m-0"}"><img class="${"w-full"}" src="${"cam.png"}" alt="${""}"></div>
    <div class="${"md:ml-auto relative p-10 md:w-1/2 flex-col flex gap-10 "}"><div class="${"text-palette-yellow400 font-bold text-4xl"}">The Astounding photoshoot
      </div>
      <div class="${"text-palette-darkGray text-xl sm:text-3xl"}">Got a gallery of pictures from your latest photoshoot?
      </div>
      <div class="${"hidden lg:block lg:absolute h-4/5 -translate-x-2/3 translate-y-72"}"><img class="${"w-full h-full"}" src="${"nav1.png"}" alt="${""}" srcset="${""}"></div>
      <div class="${"md:hidden flex items-center w-full justify-center"}"><img src="${"mav2.png"}" alt="${""}" srcset="${""}"></div></div></div>
  <div class="${"md:mt-52 mx-auto max-w-screen-lg flex flex-col md:flex-row "}"><div class="${"p-10 pt-0 md:pt-10 relative md:w-2/3 flex-col flex gap-10 "}"><div class="${"text-palette-yellow400 font-bold text-4xl"}">\u201CWhich one should I post?\u201D
      </div>
      <div class="${"text-palette-darkGray text-xl sm:text-3xl"}">Ahhh the inevitable dilemma. Does this one look good? But that one\u2019s
        better...hmmm \u{1F914}
      </div>
      <div class="${"hidden lg:block absolute h-2/3 translate-x-60 translate-y-80"}"><img class="${"w-full h-full"}" src="${"nav2.png"}" alt="${""}" srcset="${""}"></div></div>
    <div class="${"w-1/2 mx-auto md:m-0"}"><img class="${"w-full"}" src="${"huh.png"}" alt="${""}"></div>
    <div class="${"md:hidden flex items-center w-full justify-center mt-5"}"><img src="${"mav1.png"}" class="${"h-full"}" alt="${""}" srcset="${""}"></div></div>
  <div class="${"md:mt-52 p-10 mx-auto max-w-screen-lg flex flex-col justify-center items-center "}"><div class="${"text-4xl text-center text-palette-yellow400 font-bold"}">Put an end to this dilemma
    </div>
    <div class="${"text-2xl text-palette-darkGray "}">in 2 simple steps</div></div>

  <div class="${"mt-24 flex-col mx-auto max-w-screen-lg p-10"}"><div class="${"text-4xl font-bold text-palette-yellow400"}">upload all your pictures to PickForest
    </div>
    <div class="${"text-2xl text-palette-darkGray"}">it\u2019s as simple as dragging and dropping
    </div>
    <div class="${"w-full flex items-center justify-center rounded-2xl mt-6"}"><div class="${"aspect-w-16 aspect-h-9 "}"><video class="${"hidden lg:block rounded-3xl"}" loop preload muted autoplay playsinline><source src="${"conv1.mp4"}" type="${"video/mp4"}">
          Video comes here....hmmm looks like you dont support video yet
        </video>

        <img src="${"conv1.gif"}" class="${"lg:hidden rounded-3xl"}" alt="${""}" srcset="${""}"></div></div></div>
  <div class="${"flex-col mx-auto max-w-screen-lg p-10 "}"><div class="${"text-4xl font-bold text-palette-yellow400 "}">send the link to your close friends, family, neighbours, dog
    </div>
    <div class="${"text-2xl text-palette-darkGray "}">and let them choose which one to post. easy peasy
    </div>
    <div class="${"w-full flex items-center justify-center rounded-2xl mt-6"}"><div class="${"aspect-w-16 aspect-h-9 "}"><video class="${"hidden lg:block rounded-3xl"}" loop preload muted autoplay playsinline><source src="${"conv2.mp4"}" type="${"video/mp4"}">
          Video comes here....hmmm looks like you dont support video yet
        </video>

        <img src="${"conv2.gif"}" class="${"lg:hidden rounded-3xl"}" alt="${""}" srcset="${""}"></div></div></div>
  <div class="${"mt-10 flex-col mx-auto max-w-screen-lg p-10"}"><div class="${"flex flex-col md:flex-row gap-3"}"><div class="${"p-10 flex flex-1 flex-col justify-center items-center rounded-3xl bg-palette-yellow200"}"><div class="${"text-palette-yellow400 "}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-24 w-24"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"}"></path></svg></div>
        <div class="${"flex flex-col gap-2"}"><div class="${"text-2xl text-center font-bold text-palette-yellow400"}">Store pictures in Buckets
          </div>
          <div class="${"text-xl text-center text-palette-darkGray"}">Buckets are album for all your pictures that can be voted on via a
            sharable link
          </div></div></div>
      <div class="${"p-10 flex flex-1 flex-col justify-center items-center rounded-3xl bg-palette-yellow200"}"><div class="${"text-palette-yellow400 "}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-24 w-24"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></div>
        <div class="${"flex flex-col gap-2 "}"><div class="${"text-2xl text-center font-bold text-palette-yellow400"}">Time bound Voting on Buckets
          </div>
          <div class="${"text-xl text-center text-palette-darkGray"}">Each Bucket can have a time limit during which the voting can take
            place
          </div></div></div>
      <div class="${"p-10 flex flex-1 flex-col justify-center items-center rounded-3xl bg-palette-yellow200"}"><div class="${"text-palette-yellow400 "}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-24 w-24"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"1.7"}" d="${"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}"></path></svg></div>
        <div class="${"flex flex-col gap-2"}"><div class="${"text-2xl text-center font-bold text-palette-yellow400"}">Secure and Emphermal Storage
          </div>
          <div class="${"text-xl text-center text-palette-darkGray"}">All the pictures you post are securely stored with 256 bit
            encryption
          </div></div></div></div></div>

  <form id="${"signup"}" class="${"flex-col mx-auto max-w-screen-lg p-10 gap-4 flex "}"><div class="${"text-5xl md:max-w-xl font-bold"}">Sign up and be the first one to know
    </div>
    <div><input class="${"p-4 rounded-xl w-full bg-palette-yellow100 "}" placeholder="${"yourawesomeemail@temp.mail"}" type="${"email"}"${add_attribute("value", email, 0)}></div>
    <button type="${"submit"}" class="${"p-5 hover:scale-90 transition-all bg-palette-yellow300 w-fit rounded-2xl font-extrabold cursor-pointer"}">Sign me up
    </button></form>

  
  
  <div class="${"flex mx-auto max-w-screen-lg p-10 mt-28 gap-4 flex-col md:flex-row justify-center items-center text-center "}"><div><div class="${"text-xl gap-10 md:text-center md:max-w-xl font-bold flex justify-center items-center md:justify-start md:items-start"}"><div class="${"cursor-pointer hover:text-palette-yellow400"}">pricing
        </div>
        <div class="${"cursor-pointer hover:text-palette-yellow400"}">twitter
        </div></div>
      <div class="${"text-xl gap-10 mt-7 md:text-center md:max-w-xl font-bold flex justify-center items-center md:justify-start md:items-start "}"><div class="${"cursor-pointer hover:text-palette-yellow400"}">reach us out
        </div>
        <div class="${"cursor-pointer hover:text-palette-yellow400"}">built by 2 Coders
        </div></div></div>
    <div class="${"flex items-center gap-4 md:ml-auto "}"><svg width="${"60"}" height="${"60"}" viewBox="${"0 0 94 94"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M54.3438 8.8125C45.8264 8.8125 38.936 15.0117 37.324 23.0783C36.3982 23.3746 35.5055 23.7448 34.6505 24.177L29.375 11.75L26.4375 10.2812C26.4375 10.2812 22.0312 19.0938 16.1562 27.9062L22.0312 29.375L11.75 42.5938L19.0938 44.0625L8.8125 57.2813L16.1562 58.75L4.40625 71.9688C4.40625 71.9688 14.6875 73.4375 24.9688 73.4375V85.1875H32.3125V73.4375H48.5032C49.1276 73.481 49.747 73.4825 50.3994 73.4719L49.9375 85.1875H58.75L57.2755 47.8405L71.7507 35.9987L70.282 33.0612L57.0259 41.4979L56.5469 29.375H52.1406L51.3173 50.233L40.8152 44.5043L39.2804 47.2869L51.062 56.7104L50.6317 67.5883C49.7192 67.5859 48.5945 67.5602 48.7613 67.5769C42.0663 66.9073 38.6784 64.5025 36.5897 61.3806C34.5009 58.2587 33.7812 54.0765 33.7812 49.9375C33.7812 49.5923 33.8051 49.2119 33.8415 48.7872L33.939 47.6569L33.2505 46.7562C31.7394 44.7727 30.8437 42.3366 30.8437 39.6563C30.8437 33.9248 34.9083 29.2051 40.2902 28.1357L42.4675 27.7026L42.6454 25.488C43.1294 19.4276 48.1414 14.6875 54.3438 14.6875C59.2852 14.6875 63.4675 17.716 65.2188 21.9968L65.8212 23.4713L67.3875 23.7697C74.1741 25.0614 79.3125 30.99 79.3125 38.1875C79.3125 39.4072 78.4622 41.7485 77.468 43.572C76.4737 45.3955 75.4943 46.7074 75.4943 46.7074L74.7599 47.6856L74.9378 48.8962C75.5361 52.9658 74.7556 56.5478 72.8896 59.0254C71.0236 61.503 68.0631 63.1563 63.1563 63.1563V69.0313C69.5015 69.0313 74.5739 66.5544 77.5827 62.5596C80.3285 58.9139 81.1548 54.206 80.721 49.3953C81.0909 48.8803 81.6793 48.1192 82.6258 46.3832C83.8346 44.1662 85.1875 41.3682 85.1875 38.1875C85.1875 28.7271 78.6673 20.9191 69.9263 18.5458C67.012 12.8165 61.1837 8.81251 54.3438 8.81251V8.8125Z"}" fill="${"#F1C40F"}"></path></svg>
      <div class="${"text-3xl font-bold"}">PickForest</div></div></div>
</section>`;
});
export { Routes as default };
