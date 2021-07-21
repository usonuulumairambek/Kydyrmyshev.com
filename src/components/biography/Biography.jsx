import React, {useEffect} from "react";
import logo from "./Img.webp";
import "./biography.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const Biography = () => {
    useEffect(() => {
        Aos.init({duration:2000 });
       }, [])
  return (
    <div className="biography">
      <div className="biography__photo">
        <img data-aos="zoom-in"  src={logo} alt="" />
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className="biography__text">
        <h1>Biography</h1>
        <p>
          Kyrgyz public figure, President of the World Federation of National
          Wrestling "Kulatuu Ertaimash" (WEF GLOBAL), Honorary President of the
          Thai Boxing Federation of the Kyrgyz Republic, Honorary President of
          the Naga Grappling Federation of the Kyrgyz Republic, founder of the
          charitable organization "Bakubat Kelechek / Happy Future".
          <br /> <br />
          Born on November 3, 1982 in the city of Frunze, Kirghiz SSR, studied
          from 1989-1999 in secondary school No. 39, since childhood he was
          engaged in various sports such as Taekwon do, Jitkundo, Kulatuu. Has a
          black belt in Taekwondo, trained under the guidance of coach Murat
          Burkhanov. in 2004 he graduated from the Kyrgyz State National
          University named after "Zh.Balasagyn", the faculty of public
          administration, in 2006 he graduated from the magistracy of the
          Academy of Management under the President of the Kyrgyz Republic.
          since 2006 he has been engaged in entrepreneurial activity.
          <br /> <br />
          Social activity In 2011, he was appointed Vice President of the
          Federation of the Kyrgyz Republic of mixed martial arts according to
          the Brazilian version of "Valetudo" In 2014, at the republican
          congress of the Kulatuu Wrestling Federation of Kyrgyzstan, at the
          suggestion of the founder of the Kulatuu FBKR Turusbekov Temir
          Mukanovich, Ruslan Kydyrmyshev was elected by unanimous decision, Emil
          Toktogonov, Rafik Mambetaliev, General Daniel Osmon uulu. In 2015 he
          was one of the founders of the social project "Youth against Drugs" In
          2016 founded the Bakubat Kelechek Charitable Organization In 2019 he
          was elected Honorary President of the Federation of the Kyrgyz
          Republic of mixed martial arts according to the Brazilian version of
          "Valetudo" In 2018 he was elected Honorary President of the Thai
          Boxing Federation of the Kyrgyz Republic. In 2019 he was appointed an
          honorary member of the "Street Workout of the Kyrgyz Republic"
          Federation In 2020, he was appointed an honorary member of the
          Taekwondo GTF Federation of the Kyrgyz Republic In 2020, he was
          elected Honorary President of the Naga Grappling Federation of the
          Kyrgyz Republic
          <br /> <br />
          Awards In 2015, he was awarded the medal of the honorary employee of
          the State Drug Control Service of the Kyrgyz Republic In 2015 he was
          awarded a gold diploma "Patron of the Year" In 2016, he was awarded
          the "Best Head of the Federation" diploma by the Osh City Mayor's
          Office In 2016, he was awarded a Certificate of Honor for holding
          tournaments and promoting sports in Russia, from a public organization
          of the Kyrgyz Diaspora in the Russian Federation. In 2018, he was
          awarded a diploma of the Jogorku Kenesh of the Kyrgyz Republic In 2018
          he was awarded a diploma of the representative office of the State
          Migration Service of the Kyrgyz Republic in the Russian Federation In
          2018, he was awarded an honorary diploma from the State Agency for
          Physical Culture and Sports under the Government of the Kyrgyz
          Republic. In 2018, he was awarded a diploma of the Bishkek City
          Kenesh. In 2019, he was awarded a personal watch by the President of
          the Kyrgyz Republic. In 2017 he was named "Person of the Year" by the
          Elite magazine. In 2017, according to the results of public voting, he
          was recognized as the "Patron of the Year" In 2019 he was awarded a
          silver badge of the Bishkek City Council In 2019 he was awarded the
          anniversary medal of the Ministry of Internal Affairs "95 years of the
          Kyrgyz police" In 2020 he received the title of "Excellence in Sports
          of the Kyrgyz Republic" In 2020, he was awarded the medal "For helping
          to fight the COVID 19 pandemic" from the Nasaatchi public foundation
        </p>
      </div>
    </div>
  );
};

export default Biography;
