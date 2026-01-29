import Logo from "@/assets/staffs/lg.jpeg";
import backGround from "@/assets/images/bg-4.jpg" 
import back from "@/assets/images/bg-1.jpeg"
// import Image1 from "@/assets/info/image1.jfif"
// import Image2 from "@/assets/info/image2.jfif"
// import Image3 from "@/assets/info/image3.jfif"
import {
  Home,
  User,
  LogIn,
  UserPlus,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  ArrowRight,
  Baby,
  School,
  Book,
  GraduationCap
} from "lucide-vue-next";
export default {
  about: {
    generalLogo: Logo,
    bg1:backGround,
    bg2:back,
    desiger:'TheCodeUnit Soft Technologies',
    designerUrl:'https://www.thecodeunit.org.ng',
    name: "nbias",
    studentUrl:"#",
    staffUrl:"#",
    webmailLink:"https://webmail.nbais.gov.ng/",
    loginUrl:"https://nbais.com.ng/center/login",
    resultChecker:"https://resultchecker.nbais.com.ng/",
    paymentUrl:"https://payments.nbais.com.ng/payments/e-pin",
    applicationurl:"hjG<ZMvdg",
    address: "KM 5 Rigachikun, Kaduna-Zaria Express Way, Kaduna",
    phone: ["+234 9133159727"],
    email:["info@nbais.gov.ng"],  
    map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d251035.04022921267!2d7.411003265204999!3d10.546073232538328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRigachikun%2C%20Kaduna-Zaria%20Road%2C%20Kaduna.!5e0!3m2!1sen!2sng!4v1768839546744!5m2!1sen!2sng",
    motto: "",
    news:"Subscribe to our monthly newsletter to get important updates",
    about:
    "The National Board for Arabic and Islamic Studies (NBAIS) has gone through thick and thin. It was founded by Alhaji Sir, Ahmadu Bello Sardauna of Sokoto in 1960. Subsequently, it was transfered to Ahmadu Bello University, Zaria in 1969.The Board has undergone series of positive transformation.",
    about2:"Firstly, as a Board for the Northern part of Nigeria only with few Schools and Colleges under its tutelage. Currently, with the recognition and approval of National Council on Education (NCE) at its 57th meeting held at Sokoto in February, 2011, the Board as a National Examination and Regulatory Body covers the whole nation with over 900 recognized schools and colleges.",
    mission:"An Accredited Examination body that offers National exams in the SAISSCE, Tahfeez and Science Curriculum",
    vision:"The Vision of NBAIS is to be at the frontline in realizing the ambition of the Federal Government of Nigeria in its programme for the full integration of western and Islamic Education, the promotion of Qur’anic schools and the Madrasah system of education in the country.",
  },
  quickLinks: [
    { name: "Home", path: "/", icon: Home },
    { name: "About us", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ], 
  socialLinks: [
    { icon: Facebook, url: "https://www.facebook.com/share/1DUrGdGa1b/" },
    { icon: Instagram, url: "https://www.instagram.com/nbaisNG" },
    { icon: Twitter, url: "https://x.com/nbaisNG?fbclid=IwVERDUAPkE11leHRuA2FlbQIxMABzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR4Fs4a-vmUGAuuHGxOjMdUMqtM0xx3f6EW3Ga-CUCPJAMDlZA3jZTXr6T-1XA_aem_MbkQE7DyoaubJ5jyNQauwQ" },
    // { icon: Youtube, url: "#" },
  ],
 
};
