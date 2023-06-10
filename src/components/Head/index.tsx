import Head from 'next/head';
import Script from 'next/script';
import { memo } from 'react';

type Props = {
	title?: string;
};

const HeadDocs: React.FC<Props> = ({ title = '' }) => {
	return (
		<>
			<Head>
				<title>English Skill</title>

				<meta name="theme-color" content="#ffffff" />
				<meta name="og:title" content="English Skill" />
				{/* LOGO */}
				<meta name="og:image" content="/images/logos/23x23.png" />
				<meta
					name="og:description"
					content="English Skill..."
				/>
				<meta
					name="keywords"
					content="english, skill, english-skill"
				/>

				<meta name="renderer" content="webkit" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="" />
				<meta name="twitter:title" content="" />
				{/* LOGO */}
				<meta name="twitter:image" content="/images/logos/23x23.png" />

				<meta name="title" content="English Skill" />
				{/* LOGO */}
				<meta name="image" content="/images/logos/23x23.png" />
				<meta
					name="description"
					content="English Skill..."
				/>

				<meta name="format-detection" content="email=no" data-shuvi-head="true" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" data-shuvi-head="true" />
				<meta name="apple-mobile-web-app-capable" content="yes" data-shuvi-head="true" />
				<meta
					name="keywords"
					content="english, skill, english-skill"
					data-shuvi-head="true"
				/>

				{/* LOGO */}
				<link rel="apple-touch-icon" type="image/png" href="/images/logos/23x23.png" />
				<link rel="shortcut icon" href="/images/logos/23x23.png" type="image/x-icon" />
				<link rel="icon" type="image/png" href="/images/logos/23x23.png" />
				<link rel="canonical" href="https://english-skill.vercel.app" data-shuvi-head="true" />
				<link rel="shortcut icon" type="image/x-icon" href="/images/logos/23x23.png" data-shuvi-head="true" />

				<meta property="og:site_name" content="English Skill" data-shuvi-head="true" />
				<meta property="og:title" content="English Skill" data-shuvi-head="true" />
				<meta property="og:type" content="website" data-shuvi-head="true" />
				<meta property="og:url" content="https://english-skill.vercel.app" data-shuvi-head="true" />
				{/* LOGO */}
				<meta property="og:image" content="/images/logos/23x23.png" data-shuvi-head="true" />
				<meta
					property="og:description"
					content="English Skill..."
				/>
				<script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8599946851840808" crossOrigin="anonymous"></script>
			</Head>
		</>
	);
};

export default memo(HeadDocs);
