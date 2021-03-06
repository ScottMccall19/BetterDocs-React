import React from 'react'

import style from '../styles/download.module.scss'
import Layout from '../components/layout'
import '../styles/tooltips.css'
import Card from '../components/download/card'
import Feature from '../components/download/feature'

const DownloadPage = () => (
  <Layout>
    <div className={style.wrapper}
    >
      <Card
      title="BandagedBD"
      download="https://github.com/rauenzi/BetterDiscordApp/releases">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="true"
        tooltip="true"
        tooltiptext="Can be achieved with compatible plugins"
        />
      </Card>

      <Card
      title="EnhancedDiscord"
      download="https://enhanceddiscord.com/">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
      </Card>

      <Card
      title="PowerCord"
      download="https://powercord.xyz">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
      </Card>
      <Card

      title="DiscordInjections"
      download="https://github.com/DiscordInjections/DiscordInjections">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
      </Card>

      <Card
      title="BeautifulDiscord"
      download="https://github.com/leovoel/BeautifulDiscord">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="true"
        tooltip="false"
        tooltiptext={null}
        />
      </Card>

      <Card
      title="BetterDiscord"
      download="https://github.com/jiiks/BetterDiscordApp/releases">
        <Feature
        name="Themes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Plugins"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="CSS Hot-Reload"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Twitch.tv Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="BetterTTV Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="FrankerFaceZ Emotes"
        disabled="false"
        tooltip="false"
        tooltiptext={null}
        />
        <Feature
        name="Telemetry Blocking"
        disabled="true"
        tooltip="true"
        tooltiptext="Can be achieved with compatible plugins"
        />
      </Card>
    </div>
  </Layout>
)

export default DownloadPage
