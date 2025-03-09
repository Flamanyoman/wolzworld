import React, { useState } from 'react';
import { Heart, ArrowLeft, MessageCircle, Bookmark, Clock } from 'lucide-react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import heroImage from '../assets/desktopimg1.avif';
import coffeeMeal from '../assets/coffee meal.jpg';
import fineDinning from '../assets/Fine dinning.jpg';
import bodyImg from '../assets/bodyimg.avif';

const ResponsiveArticle = () => {
  // State variables (from both code sets)
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(1);
  const [commentCount, setCommentCount] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  // Shared Scrolling Gallery from set two
  const ScrollingGallery = () => (
    <div className='w-full overflow-x-auto my-6 scrollbar-hide'>
      <div className='flex gap-4 pb-4'>
        <img
          src={bodyImg}
          alt={`Featured image`}
          className='h-[180px] md:h-[220px] w-auto flex-none object-cover rounded-lg'
        />

        <img
          src={coffeeMeal}
          alt={`Featured image`}
          className='h-[180px] md:h-[220px] w-auto flex-none object-cover rounded-lg'
        />

        <img
          src={fineDinning}
          alt={`Featured image`}
          className='h-[180px] md:h-[220px] w-auto flex-none object-cover rounded-lg'
        />
      </div>
    </div>
  );

  // Shared Social Actions component
  const SocialActions = ({ isDesktop = false }) => (
    <div
      className={`flex items-center ${
        isDesktop ? 'flex-col space-y-4' : 'space-x-6'
      }`}
    >
      <button
        onClick={handleLike}
        className={`flex items-center ${
          isDesktop ? 'flex-col' : 'space-x-1'
        } transition-colors ${
          isLiked ? 'text-red-500' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <Heart
          className={`${isDesktop ? 'w-6 h-6' : 'w-5 h-5'}`}
          fill={isLiked ? 'currentColor' : 'none'}
        />
        <span>{likeCount}</span>
      </button>
      <button
        className={`flex items-center ${
          isDesktop ? 'flex-col' : 'space-x-1'
        } text-gray-600 hover:text-gray-900`}
      >
        <MessageCircle className={`${isDesktop ? 'w-6 h-6' : 'w-5 h-5'}`} />
        <span>{commentCount}</span>
      </button>
      <button
        onClick={handleSave}
        className='text-gray-600 hover:text-gray-900 transition-colors'
      >
        <Bookmark
          className={`${isDesktop ? 'w-6 h-6' : 'w-5 h-5'}`}
          fill={isSaved ? 'currentColor' : 'none'}
        />
      </button>
    </div>
  );

  // Shared Navigation Controls component
  const NavigationControls = ({ isDesktop = false }) => (
    <div
      className={`flex items-center ${
        isDesktop ? 'justify-end mt-8' : 'justify-between'
      }`}
    >
      <button
        className={`p-2 ${
          isDesktop ? 'text-gray-600' : 'text-white'
        } hover:opacity-75`}
      >
        {isDesktop ? (
          <ArrowCircleLeftIcon fontSize='large' />
        ) : (
          <ArrowLeft className='w-6 h-6' />
        )}
      </button>
      {isDesktop && <ArrowCircleRightIcon fontSize='large' className='ml-4' />}
    </div>
  );

  // Shared Social Share component
  const SocialShare = ({ isDesktop = false }) => (
    <div className={`flex items-center space-x-4 ${isDesktop ? '' : 'mt-6'}`}>
      {isDesktop && <span className='font-semibold'>Share with</span>}
      <a href='#!' className='text-blue-600 hover:opacity-75'>
        <FacebookIcon />
      </a>
      <a href='#!' className='text-blue-600 hover:opacity-75'>
        <XIcon />
      </a>
      <a href='#!' className='text-blue-600 hover:opacity-75'>
        <InstagramIcon />
      </a>
    </div>
  );

  // Mobile View: Incorporates features from code one and code two (with Navbar, Header, Aboutus_Section, article content, ScrollingGallery, SocialShare, SocialActions, and Footer)
  const MobileView = () => (
    <div className='bg-[#1E1E1E] min-h-screen pt-[35px] flex flex-col text-gray-600'>
      <main className='bg-white rounded-t-3xl p-6 flex-1 shadow-xl max-w-4xl mx-auto w-full'>
        <NavigationControls />
        <h1 className='text-3xl font-bold text-gray-900 leading-tight'>
          How to Declutter Your Digital Life
        </h1>
        <div className='flex items-center text-gray-500 text-sm mt-3 space-x-4'>
          <span className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs'>
            Technology
          </span>
          <div className='flex items-center'>
            <Clock className='w-4 h-4 mr-1' />
            <span>6h ago</span>
          </div>
        </div>
        <div className='mt-5'>
          <img
            src={heroImage}
            alt='Article Cover'
            className='w-full h-60 object-cover rounded-xl shadow-md'
          />
        </div>

        <article className='text-gray-700 mt-5 text-base leading-relaxed'>
          <p className='article'>
            In our modern, fast-paced world, the significance of what we eat
            goes far beyond mere sustenance. Every bite represents a complex
            journey—from careful cultivation and processing to rigorous safety
            checks—all designed to protect our health. As public awareness of
            nutrition and foodborne risks increases, so too does the need for
            stringent safety standards. In the following discussion, we explore
            the comprehensive measures taken to ensure that our food remains
            safe, nutritious, and capable of supporting a healthier future.
          </p>
        </article>
        <ScrollingGallery />
        <p className='article'>
          In today's rapidly evolving food industry, ensuring food and health
          safety is paramount. From the farm to the table, strict protocols and
          quality control measures are in place to prevent contamination and
          maintain the highest standards of hygiene. Food safety begins with
          responsible farming practices, where proper handling and storage
          techniques are employed to reduce the risk of harmful bacteria and
          other contaminants. Advanced processing methods, regular inspections,
          and adherence to international guidelines further help to guarantee
          that our food is safe to consume. Consumers are also encouraged to
          practice safe food handling at home by thoroughly washing produce,
          preventing cross-contamination, and cooking food to the proper
          temperatures. Moreover, nutritional awareness plays a vital role in
          health safety, as balanced diets and mindful eating contribute to
          overall well-being. With rising global concerns such as foodborne
          illnesses and dietary imbalances, both regulatory bodies and food
          manufacturers are increasingly investing in innovative technologies
          and research to address these challenges. Together, these efforts
          ensure that food remains not only safe but also nutritious. By
          promoting transparency and accountability throughout the entire food
          supply chain, society can enjoy the benefits of a secure food
          environment that protects public health and fosters long-term wellness
          for all.
        </p>
        <SocialShare />
      </main>
      <footer className='flex justify-between items-center px-6 py-4 bg-white border-t max-w-4xl mx-auto w-full'>
        <SocialActions />
      </footer>
    </div>
  );

  // Desktop View: Incorporates features from both codes including a fixed aside, navigation, ScrollingGallery, SocialShare, and additional layout styling.
  const DesktopView = () => (
    <div className='flex w-screen h-screen text-gray-600'>
      <aside className='w-[30%] fixed'>
        <img
          src={heroImage}
          alt='Skewered food'
          className='w-full h-screen object-cover'
        />
        {/* Floating Social Actions */}
        <div className='fixed left-6 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg'>
          <SocialActions isDesktop={true} />
        </div>
      </aside>
      <main className='w-[72%] h-full ml-[31%] relative p-[36px]'>
        <nav className='flex items-center justify-between'>
          <div className='text-xl font-bold text-gray-600'>Food Articles</div>
          <button className='flex flex-col space-y-1' aria-label='Open menu'>
            <span className='block w-6 h-0.5 bg-gray-600'></span>
            <span className='block w-6 h-0.5 bg-gray-600'></span>
            <span className='block w-6 h-0.5 bg-gray-600'></span>
          </button>
        </nav>
        <header className='text-left mt-[50px] text-gray-600'>
          <h1 className='text-[40px] font-bold mb-2 w-[700px]'>
            Healthy food choices are happy food choices
          </h1>
          <div className='flex items-center space-x-4 mt-4 text-sm'>
            <span className='bg-gray-200 text-gray-700 px-3 py-1 rounded-full'>
              Food & Health
            </span>
            <div className='flex items-center text-gray-500'>
              <Clock className='w-4 h-4 mr-1' />
              <span>6h ago</span>
            </div>
          </div>
        </header>
        <p className='article'>
          In our modern, fast-paced world, the significance of what we eat goes
          far beyond mere sustenance. Every bite represents a complex
          journey—from careful cultivation and processing to rigorous safety
          checks—all designed to protect our health. As public awareness of
          nutrition and foodborne risks increases, so too does the need for
          stringent safety standards. In the following discussion, we explore
          the comprehensive measures taken to ensure that our food remains safe,
          nutritious, and capable of supporting a healthier future.
        </p>

        <ScrollingGallery />
        <article className='leading-relaxed'>
          <p className='article'>
            In today's rapidly evolving food industry, ensuring food and health
            safety is paramount. From the farm to the table, strict protocols
            and quality control measures are in place to prevent contamination
            and maintain the highest standards of hygiene. Food safety begins
            with responsible farming practices, where proper handling and
            storage techniques are employed to reduce the risk of harmful
            bacteria and other contaminants. Advanced processing methods,
            regular inspections, and adherence to international guidelines
            further help to guarantee that our food is safe to consume.
            Consumers are also encouraged to practice safe food handling at home
            by thoroughly washing produce, preventing cross-contamination, and
            cooking food to the proper temperatures. Moreover, nutritional
            awareness plays a vital role in health safety, as balanced diets and
            mindful eating contribute to overall well-being. With rising global
            concerns such as foodborne illnesses and dietary imbalances, both
            regulatory bodies and food manufacturers are increasingly investing
            in innovative technologies and research to address these challenges.
            Together, these efforts ensure that food remains not only safe but
            also nutritious. By promoting transparency and accountability
            throughout the entire food supply chain, society can enjoy the
            benefits of a secure food environment that protects public health
            and fosters long-term wellness for all.
          </p>
        </article>
        <footer className='mt-8 text-gray-600'>
          <div className='flex justify-between items-center'>
            <SocialShare isDesktop={true} />
            <NavigationControls isDesktop={true} />
          </div>
        </footer>
      </main>
    </div>
  );

  return (
    <>
      <div className='block md:hidden'>
        <MobileView />
      </div>
      <div className='hidden md:block'>
        <DesktopView />
      </div>
    </>
  );
};

export default ResponsiveArticle;
