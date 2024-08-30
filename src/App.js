import logo from './logo.svg';
import './App.css';
import Header from "./component/navigation/Header";
import Footer from "./component/navigation/Footer";
import AboutIndex from "./component/main/about";
import SectionNewsIndex from "./component/news";
import IconIndex from "./component/main/icon";
import Main from "./component/navigation/main";
import OnexSmartWall from "./component/smart_wall/Onex_SMART_WALL";
import Smart_wall_section from "./component/smart_wall/smart_wall_section";
import Smart_wall_section_Two from "./component/smart_wall/smart_wall_section_Two";
import NavBar from "./component/navBar/NavBar";


function App() {
  return (
    <div  className="App">
        <NavBar />
        <SectionNewsIndex />

        <IconIndex />

        <AboutIndex />

        <Header />
        <Main />
        <OnexSmartWall />
        <OnexSmartWall>
            <Smart_wall_section  src={"https://www.youtube.com/embed/tHlUncRVzjg" }/>
            <Smart_wall_section_Two >
                <h2> ONEX SMART WALL</h2>
                <p>ONEX SMART WALL-ը տարբերվում է աշխարհում գործող նմանատիպ այլ լուծումներից իր նորարարություններով և ֆունկցիոնալությամբ։ Տվյալների վերլուծության միջոցով «խելացի պատը» կարողանում է բառացիորեն խոսել օգտատիրոջ հետ՝ տալով անհատական խորհուրդներ, ծանոթացնելով ONEX-ի նոր ծառայություններին և այլն։ Մեր մշակած համակարգը օգտատերերից ստացած տվյալների շնորհիվ օր օրի էլ ավելի կատարելագործվում և դառնում է առավել խելացի։</p>
            <button className={"btn5"}> Ավելին --></button>
            </Smart_wall_section_Two>
        </OnexSmartWall>
        <OnexSmartWall>
            <Smart_wall_section_Two >
               <h2> ONEX SMART LOCKER </h2>
                <p>
                    ONEX SMART LOCKER-ը Հայաստանում արտադրված առաջին SMART LOCKER-ն է։ Այն ամբողջությամբ մշակվել է մեր թիմի կողմից և նախատեսված է օնլայն գնումներն էլ ավելի հեշտ և արագ ստանալու համար։ Այս նորամուծության շնորհիվ օգտատերը կարող է ստանալ իր առաքանին իրեն հարմար ժամին՝ հարմար վայրից։ SMART LOCKER-ները տեղադրված են Մետրոպոլիտենի կայարաններում, սուպերմարկետներում, մոլերում, բիզնես կենտրոններում եւ այլն։
                </p>
                <button className={"btn5"}>Ավելին --> </button>
            </Smart_wall_section_Two>
            <Smart_wall_section src={"https://www.youtube.com/embed/Okbsr1S_ZhQ"}  />

        </OnexSmartWall>
        <Footer />
    </div>
  );
}

export default App;
