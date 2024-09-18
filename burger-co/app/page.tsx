import Image from "next/image";

export default function Home() {


  const burgers = [
    {
      name: "Мясная бомба",
      price: '689₽',
      grams: '520г',
      image: "/bomba.svg"
    },
    {
      name: "Супер сырный",
      price: '550₽',
      grams: '512г',
      image: "/sirniy.svg"
    },
    {
      name: "Сытный",
      price: '639₽',
      grams: '580г',
      image: "/sitniy.svg"
    },
    {
      name: "Тяжелый удар",
      price: '480₽',
      grams: '470г',
      image: "/udar.svg"
    },
    {
      name: "Вечная классика",
      price: '450₽',
      grams: '450г',
      image: "/klassika.svg"
    },
    {
      name: "Итальянский",
      price: '560₽',
      grams: '510г',
      image: "/italiya.svg"
    }
  ];



  return (
    <div className="bg-gray-100">
      <div className="w-full pb-[50px] rounded-b-[40%] bg-background pt-7 flex flex-col gap-20">
        <div className="flex gap-2 justify-center">
          <h1 className="text-[32px] text-white font-bold">YourMeal</h1>
          <Image src="/loshka.svg" alt="loshka" width={30} height={30} />
        </div>
        <div className="flex justify-center gap-5 items-center">
          <Image src="/pic.svg" alt="loshka" width={270} height={250} />
          <div className="flex flex-col gap-16">
            <div>
              <h1 className="text-white leading-[7vh] text-[50px] font-black">Только самые <br />
                <span className="text-orange-600 ">сочные бургеры!</span>
              </h1>
            </div>
            <span className="text-white text-[20px]">Бесплатная доставка от 599₽</span>
          </div>
        </div>
      </div>
      <br /> <br />


      <div className="flex pl-10 justify-around">
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/Бургеры.svg" alt="loshka" width={24} height={30} />
          <span>Бургеры</span>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/Закуски.svg" alt="loshka" width={24} height={30} />
          <span>Закуски</span>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/hotdog.svg" alt="loshka" width={24} height={30} />
          <span>Хот-доги</span>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/Комбо.svg" alt="loshka" width={24} height={30} />
          <span>Комбо</span>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/Шаурма.svg" alt="loshka" width={24} height={30} />
          <span>Шаурма</span>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/Пицца.svg" alt="loshka" width={24} height={30} />
          <span>Пицца</span>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/Вок.svg" alt="loshka" width={24} height={30} />
          <span>Вок</span>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/Десерты.svg" alt="loshka" width={24} height={30} />
          <span>Десерты</span>
        </div>
        <div className="flex gap-3 p-3 bg-white rounded-[30px] hover:bg-orange-400">
          <Image src="/Соусы.svg" alt="loshka" width={24} height={30} />
          <span>Соусы</span>
        </div>
      </div>
      <br /><br /><br />




      <div className="flex gap-4 items-start pl-20 pb-20">

        <div className=" w-[30%] sticky top-[5%] bg-white px-5 py-10 rounded-[20px] mt-[6.5%] bottom-[2%] ">
          <div className="flex items-center justify-between"><h1 className="text-[34px]">Корзина</h1> <div className="w-[61px] h-[30px] rounded-[6px] bg-gray-100 flex justify-center items-center py-2"><span>4</span></div></div>
          <br />
          <hr className="bg-gray-100" />
          <br />


          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-3">
                  <Image src="/sochniy-b.svg" alt="loshka" width={84} height={30} />
                  <div className="flex flex-col" >
                    <span>Супер сырный</span>
                    <span className="text-gray-300">512г</span>
                    <span>550₽</span>
                  </div>
                </div>
                <div className="flex w-[124px]  h-[60px] px-2  py-5 rounded-[50px] justify-around bg-gray-100 items-center text-[24px]">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
              <hr className="bg-gray-100" />
            </div>


            <div className="flex flex-col gap-6">

              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-3">
                  <Image src="/fri.svg" alt="loshka" width={84} height={30} />
                  <div className="flex flex-col" >
                    <span>Картошка фри</span>
                    <span className="text-gray-300">180г</span>
                    <span>245₽</span>
                  </div>
                </div>
                <div className="flex w-[124px]  h-[60px] px-2 py-5 rounded-[50px] justify-around bg-gray-100 items-center text-[24px]">
                  <span>-</span>
                  <span>2</span>
                  <span>+</span>
                </div>
              </div>
              <hr className="bg-gray-100" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <div className="flex items-center justify-center gap-3">
                  <Image src="/xot.svg" alt="loshka" width={84} height={30} />
                  <div className="flex flex-col" >
                    <span>Жгучий хот-дог</span>
                    <span className="text-gray-300">245г</span>
                    <span>239₽</span>
                  </div>
                </div>
                <div className="flex w-[124px]  h-[60px] px-2 py-5 rounded-[50px] justify-around bg-gray-100 items-center text-[24px]">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
              <hr className="bg-gray-100" />
            </div>

          </div>
          <br />


          <div className="flex justify-between text-[22px]">
            <h1>Итого</h1>
            <span>1279₽</span>
          </div>
          <br />

          <button className="w-full h-[60px] bg-orange-500 rounded-[50px] text-white outline-none">
            Оформить заказ
          </button>


        </div>


        <div className="w-[70%] ">
          <h1 className="text-[60px]">Бургеры</h1>

          <div className="w-full flex flex-wrap gap-[2%]">

{burgers.map((item, index) => 
            <div className="w-[32%] mb-[2%] flex flex-col gap-10 p-3 bg-white rounded-[30px]">
              <div className="flex flex-col gap-3">
                <Image src={item.image} alt="loshka" width={330} height={30} />
                <span className="text-[24px] font-bold">{item.price}</span>
                <span>{item.name}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-300">{item.grams}</span>
                <button className="w-full h-[50px] rounded-[15px] bg-slate-100">Добавить</button>
              </div>
            </div>

)}



          </div>
        </div>
      </div>






      <footer className="flex justify-between w-full h-[244px] bg-white px-20 py-10">
        <div className="flex flex-col justify-between">
          <Image src="/ficon.svg" alt="loshka" width={330} height={30} />
          <span>© YouMeal, 2022 <br />Design: Anastasia Ilina</span>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-[28px]">Номер для заказа</span>
          <Image src="/tel.svg" alt="loshka" width={200} height={30} />
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-[28px]">Мы в соцсетях</span>
          <Image src="/social.svg" alt="loshka" width={100} height={30} />
        </div>
      </footer>
    </div>
  );
}
