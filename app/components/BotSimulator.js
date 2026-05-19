'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BotSimulator.module.css';
import Flag from './Flag';

const presetCommands = [
  { cmd: '/help', desc: 'List all commands' },
  { cmd: '/status', desc: 'Get bot status & analytics' },
  { cmd: '/cortex', desc: 'About the Cortex ecosystem' },
  { cmd: '/palestine', desc: 'Get solidarity actions' },
];

export default function BotSimulator({ discordBot: customBot }) {
  const botName = customBot?.botName || 'CortexBot';
  const botAvatar = customBot?.botAvatar || '🤖';
  const welcomeMessage = customBot?.welcomeMessage || 'Hello! I am **CortexBot**, a modular Discord automation engine designed by **Sejed**. Type `/` or click one of the preset commands below to see what I can do!';

  const [messages, setMessages] = useState([
    {
      id: 'init-1',
      user: botName,
      avatar: botAvatar,
      isBot: true,
      timestamp: 'Today at 12:00 PM',
      content: welcomeMessage,
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef(null);

  // Sync with customized properties reactively during live customizations
  useEffect(() => {
    setMessages([
      {
        id: 'init-1',
        user: botName,
        avatar: botAvatar,
        isBot: true,
        timestamp: 'Today at 12:00 PM',
        content: welcomeMessage,
      }
    ]);
  }, [botName, botAvatar, welcomeMessage]);

  // Safely scroll ONLY the inner messages container (0 global page scroll!)
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  // Elite helper to parse flag emojis (🇵🇸 and 🇹🇳) and markdown bold text (**) into custom SVG flag components and HTML bold tags
  const renderTextWithFlags = (text) => {
    if (!text) return null;
    if (typeof text !== 'string') return text;
    
    const parts = text.split(/(🇵🇸|🇹🇳)/g);
    return parts.map((part, index) => {
      if (part === '🇵🇸') {
        return <Flag key={index} country="PS" size="sm" />;
      }
      if (part === '🇹🇳') {
        return <Flag key={index} country="TN" size="sm" />;
      }
      
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((bp, bidx) => {
        if (bp.startsWith('**') && bp.endsWith('**')) {
          return <strong key={`${index}-${bidx}`}>{bp.slice(2, -2)}</strong>;
        }
        return bp;
      });
    });
  };

  const triggerBotResponse = (cmd) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let embed = null;

      const formattedTime = 'Today at ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      switch (cmd.toLowerCase()) {
        case '/help':
          embed = {
            title: '🤖 CortexBot Command Directory',
            description: 'Here are the available slash commands to interact with my engine:',
            fields: [
              { name: '`/status`', value: '🟢 Real-time resource usage, active guild counts, and API response latency metrics.' },
              { name: '`/cortex`', value: '🌐 Detailed overview of Sejed\'s core open-source modular bot ecosystem.' },
              { name: '`/palestine`', value: '🇵🇸 Quick directories to Palestinian Red Crescent & Global Sumud Flotilla relief.' },
              { name: '`/help`', value: '❓ Display this informative command index panel.' },
            ],
            color: '#6366f1',
          };
          break;
        case '/status':
          embed = {
            title: '🟢 System Diagnostics — ONLINE',
            description: 'Core microservices are operating with absolute optimal throughput parameters.',
            fields: [
              { name: 'Uptime Reliability', value: '`99.99%` (Docker Orchestrated)', inline: true },
              { name: 'API Latency Response', value: '`12ms` (Ultra-low path)', inline: true },
              { name: 'Active Discord Servers', value: '`1,842 Guilds` (Scaling)', inline: true },
              { name: 'Simultaneous Users', value: '`2,459,203 Members` (Active Cache)', inline: true },
              { name: 'Engine Version', value: '`v6.4.2-Node20`', inline: true },
              { name: 'Host Architecture', value: '`Linux Ubuntu VPS`', inline: true },
            ],
            color: '#10b981',
          };
          break;
        case '/cortex':
          embed = {
            title: '🌐 About the Cortex Ecosystem',
            description: 'Cortex represents Sejed\'s flagship Discord service engine, built entirely in modular **Node.js** and **Discord.js**. It powers thousands of communities with features like advanced moderation logging, utility command pipelines, high-speed API webhooks, and highly optimized database integrations using MongoDB.',
            fields: [
              { name: 'Lead Developer', value: 'Sejed Trabelsi (@SEJED-DEV)' },
              { name: 'Availability', value: 'Open-source on GitHub, ready to deploy or scale!' }
            ],
            color: '#8b5cf6',
          };
          break;
        case '/palestine':
          embed = {
            title: '🇵🇸 Solidarity Action Directory',
            description: 'Empowering communities through awareness and supporting essential relief efforts directly on the ground in Palestine.',
            fields: [
              { name: '🇵🇸 Palestine Red Crescent (PRCS)', value: 'Providing primary emergency medical response, ambulance networks, and humanitarian support.\n[Visit PRCS Website](https://www.palestinercs.org/)' },
              { name: '🌐 Global Sumud Flotilla', value: 'Advocating for the freedom of movement, peace, and international human rights.\n[Visit Global Sumud Flotilla](https://globalsumudflotilla.org)' }
            ],
            color: '#ef4444',
          };
          break;
        default:
          embed = {
            title: '❌ Unknown Command',
            description: `Command \`${cmd}\` not recognized. Click one of the preset quick action command buttons below!`,
            color: '#ef4444',
          };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          user: botName,
          avatar: botAvatar,
          isBot: true,
          timestamp: formattedTime,
          embed,
        }
      ]);
    }, 800);
  };

  const handleCommandSubmit = (cmdStr) => {
    if (!cmdStr.trim()) return;

    const formattedTime = 'Today at ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user's message
    const userMsg = {
      id: 'user-' + Date.now(),
      user: 'GuestUser',
      avatar: '👤',
      isBot: false,
      timestamp: formattedTime,
      content: `I executed command: \`${cmdStr}\``,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    triggerBotResponse(cmdStr);
  };

  return (
    <section id="simulator" className={`section ${styles.simulator}`}>
      <div className={`orb orb-cyan ${styles.orb1}`} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className={styles.header}
        >
          <p className="section-label">// interactive playground</p>
          <h2 className="section-title">
            Discord Bot <span className="gradient-text">Simulator</span>
          </h2>
          <p className="section-subtitle">
            Play with a mock terminal simulation of my custom bot services right inside your browser window.
          </p>
          <div className="divider" />
        </motion.div>

        {/* Discord Console App Wrapper */}
        <motion.div 
          className={`glass-card ${styles.consoleWrapper}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Header Panel */}
          <div className={styles.appHeader}>
            <div className={styles.dots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.channelLabel}>
              <span className={styles.hashtag}>#</span>
              <span>🤖-cortex-commands</span>
            </div>
            <div className={styles.discordStatus}>
              <span className={styles.statusIndicator} />
              <span>Simulated Engine Online</span>
            </div>
          </div>

          {/* Core Simulator body */}
          <div className={styles.consoleBody}>
            {/* Sidebar Channels */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarSection}>
                <span className={styles.sidebarHeader}>TEXT CHANNELS</span>
                <button className={`${styles.channelBtn} ${styles.channelActive}`}>
                  <span className={styles.hashtag}>#</span> 🤖-cortex-commands
                </button>
                <button className={styles.channelBtn}>
                  <span className={styles.hashtag}>#</span> 📢-bot-announcements
                </button>
                <button className={styles.channelBtn}>
                  <span className={styles.hashtag}>#</span> 💬-global-chat
                </button>
              </div>
            </div>

            {/* Main Chat Flow */}
            <div className={styles.chatArea}>
              <div ref={scrollContainerRef} className={styles.messagesScroll}>
                {messages.map((msg) => (
                  <div key={msg.id} className={styles.messageRow}>
                    <span className={styles.avatar}>{msg.avatar}</span>
                    <div className={styles.messageContent}>
                      <div className={styles.messageMeta}>
                        <span className={styles.username}>{msg.user}</span>
                        {msg.isBot && <span className={styles.botBadge}>BOT</span>}
                        <span className={styles.timestamp}>{msg.timestamp}</span>
                      </div>
                      
                      {msg.content && <div className={styles.text}>{renderTextWithFlags(msg.content)}</div>}

                      {/* Custom Rich Embed block */}
                      {msg.embed && (
                        <div 
                          className={styles.discordEmbed}
                          style={{ borderLeftColor: msg.embed.color }}
                        >
                          <h4 className={styles.embedTitle}>{renderTextWithFlags(msg.embed.title)}</h4>
                          <p className={styles.embedDesc}>{renderTextWithFlags(msg.embed.description)}</p>
                          
                          {msg.embed.fields && (
                            <div className={styles.embedFields}>
                              {msg.embed.fields.map((f, idx) => (
                                <div 
                                  key={idx} 
                                  className={`${styles.embedField} ${f.inline ? styles.fieldInline : ''}`}
                                >
                                  <h5 className={styles.fieldName}>{renderTextWithFlags(f.name)}</h5>
                                  <div className={styles.fieldValue}>{renderTextWithFlags(f.value)}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className={styles.messageRow}>
                    <span className={styles.avatar}>{botAvatar}</span>
                    <div className={styles.messageContent}>
                      <div className={styles.messageMeta}>
                        <span className={styles.username}>{botName}</span>
                        <span className={styles.botBadge}>BOT</span>
                        <span className={styles.typingText}>is typing...</span>
                      </div>
                      <div className={styles.typingBubbles}>
                        <span className={styles.bubble} />
                        <span className={styles.bubble} />
                        <span className={styles.bubble} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bot presets triggers */}
              <div className={styles.presetButtons}>
                {presetCommands.map((p) => (
                  <button 
                    key={p.cmd}
                    className={styles.presetBtn}
                    onClick={() => handleCommandSubmit(p.cmd)}
                    title={p.desc}
                  >
                    {renderTextWithFlags(p.cmd)}
                  </button>
                ))}
              </div>

              {/* Simulated input bar */}
              <form 
                className={styles.inputForm}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommandSubmit(inputText);
                }}
              >
                <div className={styles.inputWrapper}>
                  <span className={styles.slashIndicator}>/</span>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type /help or click a quick action above..."
                    className={styles.chatInput}
                  />
                  <button type="submit" className={styles.sendBtn} aria-label="Submit command">
                    &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
