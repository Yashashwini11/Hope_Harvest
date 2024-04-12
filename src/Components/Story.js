import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Story.css';
import '../Assets/Images/boy smiling.jpg'
function Story() {
    return (
        <>
            <section class="articles">
                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src="https://media.istockphoto.com/photos/shirtless-poor-boy-portrait-picture-id616903556?k=6&m=616903556&s=612x612&w=0&h=OEjGUH0Vi-UjDaGrsOkFL4FFSLK-VjHNWLL82TXcXIo=" alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>This is some title</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            <Link to="" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </article>
                <article>

                    <div class="article-wrapper">
                        <figure>
                            <img src="https://wallpapercrafter.com/desktop8/1905596-poor-boy-cute-village-boy-child-people-childhood.jpg" alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>This is some title</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                           <Link to="" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </article>
                <article>

                    <div class="article-wrapper">
                        <figure>
                            <img src="https://www.compassion.com/Images/the-compassion-legacy-day-1.jpg" alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>This is some title</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            <Link to="" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
            </>
        )
}

export default Story