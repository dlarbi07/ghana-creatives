/* Data-driven creator discovery section for the homepage. */
(function (root) {
  const UI = root.Scene233UI;
  const e = UI.escape;
  const categories = ['ALL', 'FILM', 'DESIGN', 'PHOTOGRAPHY', 'MUSIC', 'FASHION', 'ART', 'TECH'];
  UI.MeetSceneSection = function MeetSceneSection({ creators = [] } = {}) {
    const cards = creators.map(creator => root.Scene233Cards.HomeCreatorCard({
      ...creator,
      imageUrl: /^(https?:|data:image\/)/i.test(creator.image || '') ? creator.image : image(creator.image)
    })).join('');
    return `<section class="scene-section scene-meet-creators scene-reveal" aria-labelledby="meet-scene-title">${UI.InteractiveBackground({variant:'creators',intensity:'subtle'})}
      <div class="scene-heading-row scene-meet-creators__heading">
        <div><span class="scene-kicker">THE PEOPLE BEHIND THE CULTURE</span><h2 id="meet-scene-title">MEET THE <em>SCENE.</em></h2></div>
        <div class="scene-meet-creators__intro"><p>Meet the photographers, filmmakers, designers and independent minds moving Ghanaian culture forward.</p><span>FICTIONAL CREATOR PROFILES · DEMO CONTENT</span></div>
      </div>
      <nav class="scene-home-creator-filters" aria-label="Filter creators by discipline">${categories.map((category, i) => `<button type="button" data-home-creator-filter="${e(category)}" aria-pressed="${i === 0}">${e(category)}</button>`).join('')}</nav>
      <div class="scene-heading-row scene-meet-creators__subheading"><p data-home-creator-count>${creators.length} CREATORS IN THE SCENE</p><div class="scene-carousel-controls"><button type="button" data-scroll-carousel="creators" data-direction="-1" aria-label="Scroll creators left">←</button><button type="button" data-scroll-carousel="creators" data-direction="1" aria-label="Scroll creators right">→</button></div></div>
      <div class="scene-home-creator-track" id="creatorsCarousel" tabindex="0" aria-label="Featured creators">${cards}</div>
      <div class="scene-meet-creators__footer"><span>MADE HERE. MOVING EVERYWHERE.</span><a class="scene-text-link" href="#/creators" data-scene-route="creators">DISCOVER ALL CREATORS <span>→</span></a></div>
    </section>`;
  };
})(window);
