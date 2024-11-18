import { Stack, Text, Code } from '@mantine/core'
import AnchorTitle from './AnchorTitle'

const installationCode = `<span class="line"><span style="color:#6F42C1">npm</span><span style="color:#032F62"> i</span><span style="color:#005CC5"> -D</span><span style="color:#032F62"> tailwindcss-mantine</span></span>`

const tailwindConfigCode = `<span class="line"><span style="color:#D73A49">import</span><span style="color:#24292E"> mantinePlugin </span><span style="color:#D73A49">from</span><span style="color:#032F62"> 'tailwindcss-mantine'</span></span>
<span class="line"><span style="color:#D73A49">import</span><span style="color:#24292E"> mantineTheme </span><span style="color:#D73A49">from</span><span style="color:#032F62"> 'your mantine theme override'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/** </span><span style="color:#D73A49">@type</span><span style="color:#6F42C1"> {import('tailwindcss').Config}</span><span style="color:#6A737D"> */</span></span>
<span class="line"><span style="color:#D73A49">export</span><span style="color:#D73A49"> default</span><span style="color:#24292E"> {</span></span>
<span class="line"><span style="color:#6A737D">	//...</span></span>
<span class="line"><span style="color:#24292E">	plugins: [</span><span style="color:#6F42C1">mantinePlugin</span><span style="color:#24292E">({ themeOverride: mantineTheme })],</span></span>
<span class="line"><span style="color:#24292E">}</span></span>`

const Installation = () => {
	return (
		<Stack component="section">
			<AnchorTitle id="installation">Installation</AnchorTitle>
			<ol className="list-decimal space-y-m-lg *:space-y-m-sm">
				<li>
					<Text>Install the package from npm:</Text>
					<Code
						block
						className="bg-white text-m-sm"
						dangerouslySetInnerHTML={{ __html: installationCode }}
					/>
				</li>
				<li>
					<Text>Add the plugin and theme override to tailwind.config.js:</Text>
					<Code
						block
						className="bg-white text-m-sm"
						dangerouslySetInnerHTML={{ __html: tailwindConfigCode }}
					/>
				</li>
			</ol>
		</Stack>
	)
}

export default Installation
