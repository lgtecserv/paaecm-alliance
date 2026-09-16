import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "../../hooks/use-i18n";
import { ArrowRight, ShieldCheck, Globe, Users, Target, BookOpen, Heart, Activity, MapPin, AlertCircle, TrendingDown, BookCheck } from "lucide-react";
import womenLeaders from "../../assets/women-leaders.jpg";
import youthVoices from "../../assets/youth-voices.jpg";
import communityDialogue from "../../assets/community-dialogue.jpg";
import reportCover from "../../assets/report-cover.jpg";
import africanPattern from "../../assets/african-pattern.jpg";

export const Route = createFileRoute("/$lang/")({
  component: Home,
});

function Home() {
  const { lang, t } = useI18n();

  const isPt = lang === "pt";

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with Background Image */}
      <section className="relative w-full py-24 md:py-36 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={communityDialogue} alt="Community Dialogue" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/80 to-transparent"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10 max-w-screen-xl mx-auto flex flex-col items-start text-left">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-sm font-medium text-white mb-6 backdrop-blur-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary mr-2 animate-pulse"></span>
            {t.org.acronym} - {t.org.name}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6 leading-tight">
            {t.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mb-10 font-medium">
            {t.hero.support}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={`/${lang}/about`}
              className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-primary/90"
            >
              {t.learnAbout}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white bg-transparent px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-white/10"
            >
              {t.partnerWithUs}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Infinite Carousel (Marquee) */}
      <section className="w-full py-10 bg-secondary/80 border-b border-border/40 overflow-hidden flex flex-col items-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
          {isPt ? "Apoiado por líderes e organizações globais" : "Supported by global leaders and organizations"}
        </p>
        <div className="relative w-full max-w-[100vw] flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-4">
            {/* Items */}
            <span className="text-2xl font-black text-primary/40">AFRICAN UNION</span>
            <img src={communityDialogue} className="h-16 w-32 object-cover rounded-md opacity-80" />
            <span className="text-2xl font-black text-primary/40">UN WOMEN</span>
            <span className="text-2xl font-black text-primary/40">SADC</span>
            <img src={youthVoices} className="h-16 w-32 object-cover rounded-md opacity-80" />
            <span className="text-2xl font-black text-primary/40">ECOWAS</span>
            <span className="text-2xl font-black text-primary/40">EAC</span>
            <span className="text-2xl font-black text-primary/40">GIRLS NOT BRIDES</span>
            {/* Duplicate for infinite loop */}
            <span className="text-2xl font-black text-primary/40">AFRICAN UNION</span>
            <img src={communityDialogue} className="h-16 w-32 object-cover rounded-md opacity-80" />
            <span className="text-2xl font-black text-primary/40">UN WOMEN</span>
            <span className="text-2xl font-black text-primary/40">SADC</span>
            <img src={youthVoices} className="h-16 w-32 object-cover rounded-md opacity-80" />
            <span className="text-2xl font-black text-primary/40">ECOWAS</span>
            <span className="text-2xl font-black text-primary/40">EAC</span>
            <span className="text-2xl font-black text-primary/40">GIRLS NOT BRIDES</span>
          </div>
        </div>
      </section>

      {/* 3. Impact / Key Numbers Section */}
      <section className="w-full py-20 bg-background relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url(${africanPattern})`, backgroundSize: 'cover' }}></div>
        <div className="container px-4 md:px-6 max-w-screen-xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex flex-col items-center p-8">
              <span className="text-5xl md:text-7xl font-black text-primary mb-2">10+</span>
              <span className="text-lg font-semibold text-foreground uppercase tracking-wide">
                {isPt ? "Países Africanos Representados" : "African Countries Represented"}
              </span>
            </div>
            <div className="flex flex-col items-center p-8">
              <span className="text-5xl md:text-7xl font-black text-primary mb-2">15</span>
              <span className="text-lg font-semibold text-foreground uppercase tracking-wide">
                {isPt ? "Parceiros Estratégicos" : "Strategic Partners"}
              </span>
            </div>
            <div className="flex flex-col items-center p-8">
              <span className="text-5xl md:text-7xl font-black text-primary mb-2">5</span>
              <span className="text-lg font-semibold text-foreground uppercase tracking-wide">
                {isPt ? "Pilares de Intervenção" : "Pillars of Intervention"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3.8. Pan-African Map Representation Section */}
      <section className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-2">
              {isPt ? "Presença Continental" : "Continental Presence"}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {isPt ? "Unindo Vozes de Norte a Sul de África" : "Uniting Voices from North to South Africa"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isPt 
                ? "A nossa aliança estende-se por múltiplos países africanos, garantindo que as soluções sejam adaptadas aos contextos locais. Com foco em Moçambique e noutros parceiros regionais, promovemos a partilha de conhecimentos e a implementação de políticas reais." 
                : "Our alliance spans multiple African countries, ensuring solutions are tailored to local contexts. With a focus on Mozambique and other regional partners, we promote knowledge sharing and the implementation of real policies."}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                "Moçambique", "Nigéria", "Gana", "Tanzânia", 
                "Quénia", "Etiópia", "Zâmbia", "Uganda"
              ].map((country, i) => (
                <div key={i} className="flex items-center space-x-2 text-foreground font-medium">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{country}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center items-center">
            {/* Visual Abstract Map Representation */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center p-4 text-primary drop-shadow-xl hover:scale-105 transition-transform duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-full h-full opacity-90">
                <path fill="currentColor" d="M178.6,12.7c-5.7,1.8-13.6,5.3-17.6,7.8C152.1,26.1,146,29,139.7,33.5c-4,2.9-7.5,6.5-12.7,13.1c-12,15.1-17.7,27.9-19,43.3c-0.6,7-0.1,13.3,1.9,21.5c4.7,19.2,12.5,30.3,28.8,40.8c5.1,3.3,6.3,4.7,13,15.6c11.7,19.2,16.5,29.9,23.3,51.8c7.8,25.2,14,35,32,50.7c13.8,12,23,17.4,36.5,21.5c8.9,2.7,22,3.3,27,1.1c2.1-0.9,4.2-1.7,4.7-1.7c0.5,0,0.2,1.3-0.7,2.8c-2,3.4-1.2,13,1.8,22.3c2,6.3,5.9,13.8,8.7,16.6c4.6,4.7,13.8,4.1,19.3-1.1c4.4-4.2,6.3-9.5,8-22c1.7-12.9,0.3-21.7-5-33.1c-2.3-4.9-5-10-6.1-11.4c-1.1-1.3-3.2-5-4.7-8.1c-1.4-3-3.9-9.3-5.5-13.8c-4-11.1-5.7-13.4-18.7-25c-15.1-13.5-22.3-25.1-23.7-38.3c-1-9.5,3.3-19.8,11.5-27.5c7.6-7.1,14.6-9.9,25.4-10.2c8.2-0.2,14.9,2,21.9,7.1c5.2,3.8,8.3,5,15.7,6.3c15.1,2.5,19.5,0.7,27.5-11.4c7-10.5,10.6-26.6,10.4-46.7c-0.1-12.5-1-17-4.8-24.8c-4.9-10.1-11.5-16.7-22.4-22.3c-6.8-3.5-11.5-4.8-20.7-5.9c-8.9-1-20,0.5-29,3.9c-8.3,3.1-11,3.4-14,1.8c-1.8-0.9-4.8-4.5-6.6-8c-2-3.8-3.4-5.2-4.9-4.9c-3.1,0.6-22-17.6-32.9-31.5c-7.6-9.7-15.1-17.6-18.7-19.7C201.7,10.5,185.1,10.6,178.6,12.7z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. Statistics Infinite Marquee */}
      <section className="w-full py-6 bg-primary text-primary-foreground overflow-hidden flex flex-col items-center">
        <div className="relative w-full max-w-[100vw] flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-2" style={{ animationDuration: '60s' }}>
            <span className="flex items-center text-xl font-bold"><TrendingDown className="mr-3 h-6 w-6" /> {isPt ? "1 em cada 5 raparigas em África são casadas antes dos 18 anos" : "1 in 5 girls in Africa are married before age 18"}</span>
            <span className="flex items-center text-xl font-bold"><BookCheck className="mr-3 h-6 w-6" /> {isPt ? "O casamento infantil prejudica a educação e o futuro" : "Child marriage harms education and the future"}</span>
            <span className="flex items-center text-xl font-bold"><AlertCircle className="mr-3 h-6 w-6" /> {isPt ? "Mais de 130 milhões de raparigas em risco" : "Over 130 million girls at risk"}</span>
            <span className="flex items-center text-xl font-bold"><Target className="mr-3 h-6 w-6" /> {isPt ? "A meta é erradicar esta prática até 2030 (ODS 5.3)" : "The goal is to eradicate this practice by 2030 (SDG 5.3)"}</span>
            {/* Duplicates */}
            <span className="flex items-center text-xl font-bold"><TrendingDown className="mr-3 h-6 w-6" /> {isPt ? "1 em cada 5 raparigas em África são casadas antes dos 18 anos" : "1 in 5 girls in Africa are married before age 18"}</span>
            <span className="flex items-center text-xl font-bold"><BookCheck className="mr-3 h-6 w-6" /> {isPt ? "O casamento infantil prejudica a educação e o futuro" : "Child marriage harms education and the future"}</span>
            <span className="flex items-center text-xl font-bold"><AlertCircle className="mr-3 h-6 w-6" /> {isPt ? "Mais de 130 milhões de raparigas em risco" : "Over 130 million girls at risk"}</span>
            <span className="flex items-center text-xl font-bold"><Target className="mr-3 h-6 w-6" /> {isPt ? "A meta é erradicar esta prática até 2030 (ODS 5.3)" : "The goal is to eradicate this practice by 2030 (SDG 5.3)"}</span>
          </div>
        </div>
      </section>

      {/* 4. How the Alliance Works (5 Pillars) */}
      <section className="w-full py-24 bg-secondary/30 border-t border-border/40">
        <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {isPt ? "Como a Aliança Funciona" : "How the Alliance Works"}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.approach.title} &mdash; {t.org.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: isPt ? "Responsabilização" : "Accountability", desc: t.accountabilityCenter.text },
              { icon: Activity, title: isPt ? "Vontade Política" : "Political Will", desc: isPt ? "Garantir a vontade política para a implementação de leis." : "Ensuring political will for the implementation of laws." },
              { icon: Globe, title: isPt ? "Movimento Continental" : "Continental Movement", desc: isPt ? "Um movimento coeso de norte a sul do continente." : "A cohesive movement from north to south of the continent." },
              { icon: BookOpen, title: isPt ? "Geração de Conhecimento" : "Knowledge Generation", desc: isPt ? "Criar evidências e dados de base africana." : "Create African-based evidence and data." },
              { icon: Users, title: isPt ? "Liderança Jovem" : "Youth Leadership", desc: isPt ? "Integração plena de jovens e sobreviventes." : "Full integration of youth and survivors." },
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-start p-8 rounded-3xl bg-background shadow-sm border border-border/60 hover:shadow-md transition-shadow">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Youth & Survivors Section */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="bg-primary p-12 lg:p-24 flex flex-col justify-center text-white">
            <Heart className="h-12 w-12 text-accent mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {isPt ? "Liderança de Jovens e Sobreviventes" : "Youth and Survivors Leadership"}
            </h2>
            <p className="text-lg text-primary-foreground/90 font-medium mb-8 leading-relaxed max-w-xl">
              {isPt 
                ? "Garantimos o protagonismo integral de jovens, adolescentes e sobreviventes nas estruturas de tomada de decisão, moldando a direcção do movimento pan-africano." 
                : "We ensure the full leadership of young people, adolescents, and survivors in decision-making structures, shaping the direction of the pan-African movement."}
            </p>
            <Link
              to={`/${lang}/about`}
              className="inline-flex w-fit items-center text-accent font-semibold hover:text-white transition-colors text-lg"
            >
              {isPt ? "Ler mais sobre a nossa abordagem" : "Read more about our approach"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img src={youthVoices} alt="Youth Voices" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>


    </div>
  );
}
