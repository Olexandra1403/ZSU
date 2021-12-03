import React from "react";
import { Container } from "react-bootstrap";

const style = { textIndent: "20px"};

export function AboutSite() {
  return (
    <Container fluid>
      <h2 className="text-center m-3"><b>АВТОСЛУЖБА Збройних Сил України</b></h2>
      <h4 className="text-center m-3">ІНСТРУКЦІЯ з організації проведення підконтрольної експлуатації озброєння та військової техніки у Збройних Силах України</h4>
      <h5 style = {style}>Загальні положення</h5>
      <ol>
        <li>Ця Інструкція визначає загальну процедуру організації проведення заходів підконтрольної експлуатації озброєння та військової техніки (далі - ОВТ) вітчизняного та іноземного виробництва у Збройних Силах України.</li>
        <li>Дія цієї Інструкції поширюється на всі види ОВТ, що розроблялися (модернізувалися) або закуповувались в інтересах Збройних Сил України, за винятком військової авіаційної техніки та комплектувальних виробів до неї, залізничної техніки, засобів криптографічного захисту інформації, автоматизованих (інформаційних) систем, які за своїми ознаками належать до ОВТ, засобів розвідки та ОВТ спеціального призначення, у тому числі засобів розвідки за номенклатурою Головного управління розвідки Міністерства оборони України. Підконтрольна експлуатація, а також збирання, аналіз і подання інформації про несправності виробів військової авіаційної техніки, залізничної техніки, кораблів та суден Військово-Морських Сил Збройних Сил України, засобів криптографічного захисту інформації, автоматизованих (інформаційних) систем, засобів розвідки та ОВТ спеціального призначення, у тому числі засобів розвідки номенклатури Головного управління розвідки Міністерства оборони України, визначаються відповідно до вимог чинного законодавства України.</li>
        <li>У цій Інструкції терміни вживаються у таких значеннях: експлуатаційні документи - вид конструкторських документів, які окремо або у сукупності з іншими документами визначають правила експлуатації ОВТ та (або) відображають відомості, що засвідчують гарантовані виробником значення основних параметрів і характеристик (властивостей) ОВТ, гарантії і дані про їх експлуатацію протягом встановленого строку служби. Експлуатаційні документи призначені для експлуатації ОВТ, ознайомлення з їх конструкцією, вивчення правил експлуатації (використання за призначенням, технічного обслуговування, поточного ремонту, зберігання і транспортування); надійність - властивість об'єкта зберігати у часі в установлених межах значення всіх параметрів, що характеризують здатність виконувати потрібні функції в заданих режимах та умовах застосування, технічного обслуговування, зберігання і транспортування. Надійність є комплексною властивістю, яка залежно від призначення об'єкта й умов його застосування містить в собі безвідмовність, довговічність, ремонтопридатність та збережуваність чи певні поєднання цих властивостей; нормативно-технічні документи - документи, які встановлюють принципи, правила, порядок постачання, експлуатації, відновлення ОВТ, а також порядок організації управління; підконтрольна експлуатація виробів військового призначення - штатна експлуатація заданої кількості виробів військового призначення, що супроводжується додатковим контролем і врахуванням їх технічного стану для одержання достовірної інформації щодо змінювання якісних показників технічного стану виробів в умовах експлуатації; штатна експлуатація виробів військового призначення - експлуатація виробів військового призначення згідно з вимогами експлуатаційної документації, затвердженої у встановленому порядку.</li>
      </ol>
      <h5 style = {style}>Метою підконтрольної експлуатації є</h5>
      <ol>
        <li>підтвердження відповідності ОВТ вимогам нормативно-технічної документації в умовах їх використання за призначенням; перевірка всіх тактико-технічних характеристик ОВТ, за результатами якої приймається рішення про прийняття зразка ОВТ на озброєння (постачання) в особливий період; перевірка ефективності впроваджених конструкторських і технологічних рішень під час розробки та виготовлення ОВТ, застосування комплектувальних виробів, у тому числі вироблених за сучасними технологіями; отримання додаткових відомостей про надійність ОВТ під час їх експлуатації у різні пори року та різних кліматичних зонах; можливість застосування нових марок пально-мастильних матеріалів, спеціальних рідин, які не передбачені експлуатаційною документацією на ОВТ, а також відомостей, які враховуються під час подальших розробок зразків ОВТ; дослідження зміни якісних показників технічного стану ОВТ під час їх експлуатації в різних умовах; підготовка рекомендацій щодо усунення недоліків, підвищення ефективності використання ОВТ.</li>
        <li>Збір інформації про надійність ОВТ під час експлуатації проводиться для отримання даних, необхідних для удосконалення конструкції ОВТ, технології їх виготовлення, правил та методів експлуатації і ремонту ОВТ, а також контролю показників надійності ОВТ.</li>
        <li>Основними завданнями збору та обробки інформації під час проведення підконтрольної експлуатації ОВТ є: виявлення конструктивних і технологічних недоліків ОВТ, які знижують надійність, а також виявлення недоліків в організації ремонту й експлуатації; встановлення елементів та складових частин, що лімітують надійність виробів ОВТ; уточнення критеріїв відмов і граничних станів ОВТ; уточнення норм витрат експлуатаційних матеріалів, запасних частин, інструментів і приладдя (далі - ЗІП); оцінка ефективності заходів щодо підвищення надійності ОВТ; підготовка рекомендацій із внесення змін до експлуатаційної, ремонтної та робочої конструкторської документації виробу ОВТ; підготовка пропозицій щодо комплектності одиночних, групових та ремонтних комплектів ЗІП.</li>
        <li>Ініціатором підконтрольної експлуатації ОВТ є командування (штаби) видів (родів військ) Збройних Сил України, служби забезпечення органів військового управління, структурні підрозділи Міністерства оборони України, Генерального штабу Збройних Сил України та інші органи військового управління, які безпосередньо підпорядковані Міністерству оборони України та Генеральному штабу Збройних Сил України.</li>
      </ol>
    </Container>
  );
}
