export default function TeamTemplate() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font" dir="rtl" id="team">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">فريق بزوغ</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">نحن مجموعة من الشباب الطموحين، نسعى لتطوير ذواتنا وخدمة مجتمعنا من خلال البرمجة، التصميم، والإبداع. نؤمن أن العمل الجماعي هو مفتاح النجاح، وأن أثرنا يبدأ من الآن.</p>
                </div>
                <div class="flex flex-wrap -m-2">
                    <TeamPerson name="عاصم عبدالله ناجي" info="مهندس برمجيات" image="/images/person-profile.svg" />
                    <TeamPerson name="محمد عبدالله قاسم" info="مهندس برمجيات" image="/images/person-profile.svg" />
                    <TeamPerson name="محمد سعيد" info="مهندس برمجيات" image="/images/person-profile.svg" />
                </div>
            </div>
        </section>
    );
}

function TeamPerson(props) {
    return (
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full ml-4" src={props.image} />
                <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">{props.name}</h2>
                    <p class="text-gray-600">{props.info}</p>
                </div>
            </div>
        </div>
    );
}