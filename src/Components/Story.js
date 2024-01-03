import React from 'react';
import '../Assets/CSS/Story.css';

function Story() {
    return (
        <>

            <h2>JOURNEY OF TRIUMPH </h2>
            <section>
                <div class="container">
                    <div class="carousel">
                        <input type="radio" name="slides" checked="checked" id="slide-1" />
                        <input type="radio" name="slides" id="slide-2" />
                        <input type="radio" name="slides" id="slide-3" />
                        <input type="radio" name="slides" id="slide-4" />
                        <input type="radio" name="slides" id="slide-5" />
                        <input type="radio" name="slides" id="slide-6" />
                        <ul class="carousel__slides">
                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1041/800/450" alt="" />
                                    </div>
                                    <figcaption>
                                        In a small town, 16-year-old Alex faced a life-threatening heart condition. With little means, his sister Emma turned to the HopeHarvest donation app. Strangers rallied, generously funding Alex's surgery. This act of kindness not only mended his heart but also showcased the power of community support. Now recovered, Alex advocates for organ donation, turning his life story into a testament to the transformative impact of collective goodwill and the hope harvested from the kindness of strangers.
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1043/800/450" alt="" />
                                    </div>
                                    <figcaption>
                                    Meet Sarah, a single mother facing financial struggles when her son, Jake, needed urgent medical treatment. HopeHarvest, a donation app, became her lifeline. Strangers, touched by Sarah's story, poured in contributions. The generosity not only saved Jake but also empowered Sarah to start a support group for other parents in need. Through HopeHarvest, she not only secured Jake's health but created a community that understands the profound impact of extending a helping hand. Their story exemplifies how a simple act of giving can ripple
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1044/800/450" alt="" />
                                    </div>
                                    <figcaption>
                                    In the aftermath of a devastating flood, Mark found himself grappling with the loss of his home and livelihood. HopeHarvest, a beacon of hope, connected him with compassionate donors worldwide. Their collective support enabled Mark to rebuild not only his house but also his dreams. With funds pouring in, he initiated a community-driven flood resilience program, helping neighbors withstand future disasters. Mark's journey from despair to resilience showcases the transformative power of collective generosity, turning tragedy into an opportunity to foster unity and preparedness within a community. HopeHarvest, truly sowing seeds of hope in the wake of adversity.
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1045/800/450" alt="" />
                                    </div>
                                    <figcaption>
                                    Meet Lucky, a once-struggling stray dog who faced the harsh realities of an extreme disease. HopeHarvest, the compassionate fundraising app, became Lucky's lifeline. A community of animal lovers rallied together, contributing funds for Lucky's medical treatment and rehabilitation. The outpouring of support not only saved Lucky's life but also provided him with a loving forever home. His story echoes the profound impact of collective kindness through HopeHarvest, turning a tale of suffering into one of resilience, healing, and the boundless capacity for positive change. Lucky, now thriving, embodies the transformative possibilities that compassionate crowdfunding can bring to the lives of those who need it most.
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1049/800/450" alt="" />
                                    </div>
                                    <figcaption>
                                    Jake, a spirited boy, faced the harsh reality of cancer. HopeHarvest, a fundraising app, became his lifeline. Thanks to generous donors, Jake received vital treatments and emerged victorious in his battle. This short story is a testament to the impact of community support and the life-changing role of compassionate donations through technology.
                                    </figcaption>
                                </figure>
                            </li>
                            <li class="carousel__slide">
                                <figure>
                                    <div>
                                        <img src="https://picsum.photos/id/1052/800/450" alt="" />
                                    </div>
                                    <figcaption>
                                    Meet Alex, a determined young boy with big dreams but limited resources. Through the HopeHarvest app, he found a glimmer of hope. Donors rallied behind Alex's educational journey, providing scholarships and resources. With this support, Alex overcame obstacles and achieved academic success. His story highlights the transformative power of education and how technology, coupled with compassionate contributions, can change a young life forever.
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                        <ul class="carousel__thumbnails">
                            <li>
                                <label for="slide-1"><img src="https://picsum.photos/id/1041/150/150" alt="" /></label>
                            </li>
                            <li>
                                <label for="slide-2"><img src="https://picsum.photos/id/1043/150/150" alt="" /></label>
                            </li>
                            <li>
                                <label for="slide-3"><img src="https://picsum.photos/id/1044/150/150" alt="" /></label>
                            </li>
                            <li>
                                <label for="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt="" /></label>
                            </li>
                            <li>
                                <label for="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt="" /></label>
                            </li>
                            <li>
                                <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt="" /></label>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Story;
