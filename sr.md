sr(Structure and rules)

# NepsenX(unregistered company)
---

## Global server system

```mermaid
---
config:
  theme: neo-dark
  look: classic
---
flowchart TD
    subgraph Cloudflare_Pages ["CLOUDFLARE PAGES (Global Edge Network) - nepsenx.pages.dev"]
        direction TB
        GH["GitHub Repository<br/>NepsenX/frontend-tsx"] -->|"CI/CD Push"| CF_Build["Cloudflare Build System<br/>(Wrangler)"]
        CF_Build -->|"Build Output (TSX/CSS)"| CF_CDN["Global CDN Cache<br/>(100+ Locations)"]
        
        subgraph CF_Domains ["🌐 Domain Routing Matrix"]
            MainDom["nepsenx.pages.dev"] --> CF_CDN
            Sub1["oracus.pages.dev"] --> CF_CDN
            Sub2["opena.pages.dev"] --> CF_CDN
            Sub3["cg.pages.dev"] --> CF_CDN
            Sub4["virtubrowse.pages.dev"] --> CF_CDN
            Sub5["basikno.pages.dev"] --> CF_CDN
            Sub6["ishahi.pages.dev"] --> CF_CDN
            Sub7["adupter.pages.dev"] --> CF_CDN
        end
        
        CF_CDN -->|"Serves index.html + TSX"| Users
    end
    subgraph Users ["100 CONCURRENT USERS - P2P MESH NETWORK (1 New User Per Second)"]
        direction TB
        GF["👑 GODFATHER NODE<br/><strong>User #001</strong><br/>Role: Global Coordinator<br/>Rotation Cycle: Every 1 Second<br/>Function: Receives all IPs from IP-HOLDER,<br/>calculates health scores of 100 active users,<br/>assigns next 16 Sector Leaders<br/>Local State: Full Network Map (100 IPs + Health Metrics)<br/>Failover: IP-HOLDER promotes new Godfather if offline"]
        L1["📌 <strong>IP-HOLDER LEADER</strong><br/>User #002<br/>Role: Master Directory<br/>Stores: All 100 users Public/Real IPs,<br/>Device Logs (Browser, OS, Screen),<br/>Connection Types (WiFi/Mobile)<br/>Functions: Provides IP data to Godfather every second,<br/>If Godfather offline → promotes new Godfather<br/>Failover: If #002 offline → User #087 becomes leader"]
        
        L2["🏠 <strong>HOME-FEED LEADER</strong><br/>User #003<br/>Role: Real-time Content Aggregator<br/>Manages: OpenA homepage feed,<br/>1000+ updates/second aggregation,<br/>Last 50 posts cache,<br/>Trending topics calculator<br/>Connects only with: Feed page users + IP-HOLDER"]
        
        L3["👤 <strong>PROFILE LEADER</strong><br/>User #004<br/>Role: Identity Management<br/>Manages: Bios (100 users),<br/>Online/Offline status tracker,<br/>Profile view counters,<br/>Customization settings sync,<br/>Avatar URL references"]
        
        L4["🔐 <strong>LOGIN-AUTH LEADER</strong><br/>User #005<br/>Role: Session Security<br/>Manages: P2P handshake tokens,<br/>Active session tracker (100 users),<br/>Session expiry coordinator,<br/>Logout signal distributor,<br/>Re-auth request handler"]
        
        L5["⚙️ <strong>SETTINGS LEADER</strong><br/>User #006<br/>Role: Configuration Sync<br/>Manages: Global UI preferences,<br/>Theme settings (dark/light/system),<br/>Notification preferences,<br/>Language settings (BN/EN),<br/>Privacy toggles"]
        
        L6["📝 <strong>ARTICLE LEADER</strong><br/>User #007<br/>Role: Content Collaboration<br/>Manages: Long-form articles state,<br/>Collaborative editing version control,<br/>Comment section sync,<br/>Article lock mechanism,<br/>Read receipts tracker"]
        
        L7["📊 <strong>DASH-OPENA LEADER</strong><br/>User #008<br/>Role: Analytics Engine<br/>Manages: Platform statistics,<br/>User growth metrics,<br/>Engagement reports,<br/>Page view analytics,<br/>Retention calculations"]
        
        L8["📈 <strong>DASH-ADUPTER LEADER</strong><br/>User #009<br/>Role: Growth Optimization<br/>Manages: Adaptation metrics,<br/>A/B test data,<br/>Performance optimization scores,<br/>Feature adoption tracking,<br/>User feedback aggregation"]
        
        L9["💳 <strong>PAYMENT LEADER</strong><br/>User #010<br/>Role: Financial Layer<br/>Manages: P2P transaction signals,<br/>Virtual balance tracker,<br/>Payment history (last 100),<br/>Escrow service state,<br/>Invoice generator"]
        
        L10["🛒 <strong>SHOP LEADER</strong><br/>User #011<br/>Role: Marketplace State<br/>Manages: Product inventory (100 items),<br/>Order synchronization,<br/>Seller-buyer bridge,<br/>Cart state tracker,<br/>Product reviews cache"]
        
        L11["📚 <strong>LEARN LEADER</strong><br/>User #012<br/>Role: Education Hub<br/>Manages: Course modules state,<br/>Progress tracker (100 users),<br/>Quiz/assessment state,<br/>Certificate generator,<br/>Learning path optimizer"]
        
        L12["👥 <strong>LEARN-PART LEADER</strong><br/>User #013<br/>Role: Collaborative Learning<br/>Manages: Study group coordinator,<br/>Group assignments sync,<br/>Peer review system,<br/>Discussion threads,<br/>Resource sharing state"]
        
        L13["🎮 <strong>GAMES LEADER</strong><br/>User #014<br/>Role: Gaming Engine<br/>Manages: Real-time game state,<br/>Multiplayer physics sync,<br/>Scoreboard updates (100 players),<br/>Matchmaking coordinator,<br/>Game invites handler"]
        
        L14["👪 <strong>CLAN LEADER</strong><br/>User #015<br/>Role: Community Management<br/>Manages: Group/guild data (10 clans),<br/>Clan chat synchronization,<br/>Shared resources tracker,<br/>Clan war state,<br/>Member activity logs"]
        
        L15["🎥 <strong>LIVE-BASIKNO LEADER</strong><br/>User #016<br/>Role: Primary Broadcast<br/>Manages: Live stream metadata,<br/>Viewer count sync (0-1000),<br/>Stream health monitor,<br/>Chat moderation state,<br/>Recording scheduler"]
        
        L16["📡 <strong>LIVE-ISHIHI LEADER</strong><br/>User #017<br/>Role: Secondary Broadcast<br/>Manages: Alternative stream feeds,<br/>Video quality adapter,<br/>Stream failover handler,<br/>Multi-bitrate encoder state,<br/>Stream backup coordinator"]
        subgraph Regular_Users ["Regular Peer Grid (83 Users - #018 to #100)"]
            direction LR
            U18("User #018") --- U19("User #019") --- U20("User #020") --- U21("User #021") --- U22("User #022")
            U23("User #023") --- U24("User #024") --- U25("User #025") --- U26("User #026") --- U27("User #027")
            U28("User #028") --- U29("User #029") --- U30("User #030") --- U31("User #031") --- U32("User #032")
            U33("User #033") --- U34("User #034") --- U35("User #035") --- U36("User #036") --- U37("User #037")
            U38("User #038") --- U39("User #039") --- U40("User #040") --- U41("User #041") --- U42("User #042")
            U43("User #043") --- U44("User #044") --- U45("User #045") --- U46("User #046") --- U47("User #047")
            U48("User #048") --- U49("User #049") --- U50("User #050") --- U51("User #051") --- U52("User #052")
            U53("User #053") --- U54("User #054") --- U55("User #055") --- U56("User #056") --- U57("User #057")
            U58("User #058") --- U59("User #059") --- U60("User #060") --- U61("User #061") --- U62("User #062")
            U63("User #063") --- U64("User #064") --- U65("User #065") --- U66("User #066") --- U67("User #067")
            U68("User #068") --- U69("User #069") --- U70("User #070") --- U71("User #071") --- U72("User #072")
            U73("User #073") --- U74("User #074") --- U75("User #075") --- U76("User #076") --- U77("User #077")
            U78("User #078") --- U79("User #079") --- U80("User #080") --- U81("User #081") --- U82("User #082")
            U83("User #083") --- U84("User #084") --- U85("User #085") --- U86("User #086") --- U87("User #087")
            U88("User #088") --- U89("User #089") --- U90("User #090") --- U91("User #091") --- U92("User #092")
            U93("User #093") --- U94("User #094") --- U95("User #095") --- U96("User #096") --- U97("User #097")
            U98("User #098") --- U99("User #099") --- U100("User #100")
        end
    end
    subgraph Compression ["FRONT-END COMPRESSION (Per User Browser)"]
        direction TB
        C1["Brotli Compression<br/>Level 11<br/>90% Size Reduction"] -->|Compressed Data| Users
        C2["Gzip Compression<br/>Level 9<br/>Fallback for older browsers"] -->|Compressed Data| Users
        C3["Binary Serialization<br/>JSON → Uint8Array<br/>Protocol Buffers Style"] -->|Binary Payload| Users
    end
    subgraph Clustering ["SECTOR CLUSTERING (Page-Based Connection Logic)"]
        direction TB
        
        subgraph Feed_Cluster ["HOME-FEED Page Users"]
            F1["User #018 (Feed)"] -->|WebRTC Only| L2
            F2["User #019 (Feed)"] -->|WebRTC Only| L2
            F3["User #020 (Feed)"] -->|WebRTC Only| L2
            F1 & F2 & F3 -->|Also Connect to| L1
        end
        
        subgraph Profile_Cluster ["PROFILE Page Users"]
            P1["User #021 (Profile)"] -->|WebRTC Only| L3
            P2["User #022 (Profile)"] -->|WebRTC Only| L3
            P3["User #023 (Profile)"] -->|WebRTC Only| L3
            P1 & P2 & P3 -->|Also Connect to| L1
        end
        
        subgraph Games_Cluster ["GAMES Page Users"]
            G1["User #024 (Games)"] -->|WebRTC Only| L13
            G2["User #025 (Games)"] -->|WebRTC Only| L13
            G3["User #026 (Games)"] -->|WebRTC Only| L13
            G1 & G2 & G3 -->|Also Connect to| L1
        end
        
        subgraph Shop_Cluster ["SHOP Page Users"]
            S1["User #027 (Shop)"] -->|WebRTC Only| L10
            S2["User #028 (Shop)"] -->|WebRTC Only| L10
            S3["User #029 (Shop)"] -->|WebRTC Only| L10
            S1 & S2 & S3 -->|Also Connect to| L1
        end
    end
    subgraph Leader_Network ["LEADER NETWORK (Inter-Leader P2P Connections)"]
        direction LR
        L1 <-->|"IP Data Sync (Every 0.5s)"| GF
        L2 <-->|"Feed Aggregates"| GF
        L3 <-->|"Profile Updates"| GF
        L4 <-->|"Auth Tokens"| GF
        L5 <-->|"Config Changes"| GF
        L6 <-->|"Article States"| GF
        L7 <-->|"Analytics Data"| GF
        L8 <-->|"Metrics Data"| GF
        L9 <-->|"Transaction Logs"| GF
        L10 <-->|"Inventory State"| GF
        L11 <-->|"Course Progress"| GF
        L12 <-->|"Group States"| GF
        L13 <-->|"Game States"| GF
        L14 <-->|"Clan Data"| GF
        L15 <-->|"Stream Metadata"| GF
        L16 <-->|"Stream States"| GF
    end
    subgraph Godfather_Logic ["GODFATHER CONTROL LOGIC (Executed Every Second)"]
        direction TB
        Step1["1. Request all IPs & Device Logs"] -->|From| L1
        Step1 --> Step2["2. Build Complete Network Map<br/>(100 Users: IP, Device, Latency, Bandwidth)"]
        Step2 --> Step3["3. Calculate Health Scores<br/>Formula: (Uptime × 0.4) + (Bandwidth × 0.3) + (Latency × 0.3)"]
        Step3 --> Step4["4. Rank Top 16 Healthiest Users"]
        Step4 --> Step5["5. Assign Sector Roles for Next Second<br/>User #002 → IP-HOLDER<br/>User #087 → HOME-FEED<br/>User #034 → PROFILE<br/>... etc"]
        Step5 --> Step6["6. Send P2P Handover Messages<br/>'User #087, you are now HOME-FEED Leader. Here is current state.'"]
        Step6 --> Step7["7. Update Local Godfather Memory<br/>Store new leader assignments for next cycle"]
        Step7 --> Step1
    end
    subgraph Data_Flow ["USER → LEADER DATA FLOW (Compressed by 90%)"]
        U18 & U19 & U20 -->|Compressed Feed Data| L2
        U21 & U22 & U23 -->|Compressed Profile Data| L3
        U24 & U25 & U26 -->|Compressed Game State| L13
        U27 & U28 & U29 -->|Compressed Shop Data| L10
        U30 & U31 & U32 -->|Compressed Payment Data| L9
        U33 & U34 & U35 -->|Compressed Settings| L5
        U36 & U37 & U38 -->|Compressed Article Data| L6
        U39 & U40 & U41 -->|Compressed Analytics| L7
        U42 & U43 & U44 -->|Compressed Metrics| L8
        U45 & U46 & U47 -->|Compressed Course Data| L11
        U48 & U49 & U50 -->|Compressed Group Data| L12
        U51 & U52 & U53 -->|Compressed Clan Data| L14
        U54 & U55 & U56 -->|Compressed Stream Data| L15
        U57 & U58 & U59 -->|Compressed Stream Data| L16
        U60 & U61 & U62 & U63 & U64 & U65 & U66 & U67 & U68 & U69 & U70 -->|Compressed Auth/IP Data| L4
        U71 & U72 & U73 & U74 & U75 & U76 & U77 & U78 & U79 & U80 & U81 & U82 & U83 & U84 & U85 & U86 & U87 & U88 & U89 & U90 & U91 & U92 & U93 & U94 & U95 & U96 & U97 & U98 & U99 & U100 -->|Compressed IP/Device Logs| L1
    end
    subgraph Database ["BLOMP CLOUD PERSISTENCE LAYER (JSON Storage) - 16 Calls/Second Total"]
        direction TB
        Blomp_API["Blomp Swift API Endpoint<br/>blomp.com/api/v1/json"]
        
        subgraph Leader_Batches ["16 Sector Leaders → 1 Batch/Second Each"]
            L1 --"IP-HOLDER.json.gz<br/>100 IPs + Device Logs<br/>~2KB compressed"--> Blomp_API
            L2 --"HOME-FEED.json.gz<br/>50 Latest Posts<br/>~1.5KB compressed"--> Blomp_API
            L3 --"PROFILE.json.gz<br/>100 Bios + Status<br/>~1KB compressed"--> Blomp_API
            L4 --"LOGIN-AUTH.json.gz<br/>100 Session Tokens<br/>~0.5KB compressed"--> Blomp_API
            L5 --"SETTINGS.json.gz<br/>100 Configs<br/>~0.8KB compressed"--> Blomp_API
            L6 --"ARTICLE.json.gz<br/>10 Active Articles<br/>~2KB compressed"--> Blomp_API
            L7 --"DASH-OPENA.json.gz<br/>Analytics Snapshot<br/>~1KB compressed"--> Blomp_API
            L8 --"DASH-ADUPTER.json.gz<br/>Growth Metrics<br/>~0.7KB compressed"--> Blomp_API
            L9 --"PAYMENT.json.gz<br/>Transaction Logs<br/>~0.6KB compressed"--> Blomp_API
            L10 --"SHOP.json.gz<br/>Inventory State<br/>~1.2KB compressed"--> Blomp_API
            L11 --"LEARN.json.gz<br/>Course Progress<br/>~1KB compressed"--> Blomp_API
            L12 --"LEARN-PART.json.gz<br/>Group States<br/>~0.9KB compressed"--> Blomp_API
            L13 --"GAMES.json.gz<br/>Game States<br/>~1.5KB compressed"--> Blomp_API
            L14 --"CLAN.json.gz<br/>Clan Data<br/>~1KB compressed"--> Blomp_API
            L15 --"LIVE-BASIKNO.json.gz<br/>Stream Metadata<br/>~0.8KB compressed"--> Blomp_API
            L16 --"LIVE-ISHIHI.json.gz<br/>Stream States<br/>~0.8KB compressed"--> Blomp_API
        end
        
        subgraph Direct_Writes ["Direct User Writes (Compressed)"]
            U18 --"User Data Write<br/>~0.2KB each"--> Blomp_API
            U50 --"User Data Write"--> Blomp_API
            U100 --"User Data Write"--> Blomp_API
        end
        
        subgraph Reads ["Data Reads (All Users)"]
            Blomp_API -->|"IP-HOLDER.json"| L1
            Blomp_API -->|"Sector JSONs"| L2 & L3 & L4 & L5 & L6 & L7 & L8 & L9 & L10 & L11 & L12 & L13 & L14 & L15 & L16
            Blomp_API -->|"User Data"| U18 & U50 & U100
        end
        
        Total_Calls["🔢 TOTAL DATABASE CALLS PER SECOND: 16<br/>(Regardless of 100 or 10M users)"]
    end
    subgraph Failover ["FAILOVER SYSTEM (Zero-Downtime Self-Healing)"]
        direction TB
        
        subgraph IP_Holder_Failover ["IP-HOLDER Leader Failover"]
            I1["IP-HOLDER #002"] -->|"Heartbeat Check (Every 100ms)"| I2{Is Online?}
            I2 -->|"No Response"| I3["Select Next Healthiest User<br/>User #087 (Health Score: 98.5)"]
            I3 --> I4["P2P Handover Message<br/>'User #087, you are now IP-HOLDER Leader'"]
            I4 --> I5["Transfer Current State<br/>100 IPs + Device Logs"]
            I5 --> I6["New IP-HOLDER Active<br/>Zero Downtime"]
        end
        
        subgraph Godfather_Failover ["Godfather Failover"]
            G1["Godfather #001"] -->|"Heartbeat Check"| G2{Is Online?}
            G2 -->|"No Response (1s)"| G3["IP-HOLDER #002 detects failure"]
            G3 --> G4["IP-HOLDER promotes self as New Godfather"]
            G4 --> G5["New Godfather #002<br/>Broadcasts to all Leaders"]
            G5 --> G6["IP-HOLDER role passed to #087"]
        end
    end
    subgraph P2P_Visual ["P2P WEBRTC DATA CHANNELS (Real-time)"]
        direction LR
        User_A["User #018"] <-->|"WebRTC DataChannel<br/>Encrypted (DTLS)"| User_B["User #019"]
        User_B <-->|"Mesh Relay"| User_C["User #020"]
        User_C <-->|"Gossip Protocol"| L2["HOME-FEED Leader"]
        L2 <-->|"State Sync"| GF["Godfather"]
    end
    subgraph Summary ["SYSTEM SUMMARY - 10M USER CAPABLE"]
        Stats1["✅ Total Concurrent Users: 100 (Scale to 10M)"]
        Stats2["✅ Total Database Calls/sec: 16 (Fixed)"]
        Stats3["✅ Bandwidth Reduction: 90% (Brotli/Gzip)"]
        Stats4["✅ Leader Rotation: Every 1 Second"]
        Stats5["✅ Godfather Failover: < 1 Second"]
        Stats6["✅ IP-HOLDER Failover: < 100ms"]
        Stats7["✅ Total P2P Connections: 4950 (Full Mesh)"]
        Stats8["✅ Zero Central Servers: 100% Browser-Based"]
    end
    Cloudflare_Pages --> Users
    Compression --> Users
    Users --> Clustering
    Users --> Leader_Network
    Users --> Data_Flow
    GF --> Godfather_Logic
    Godfather_Logic --> Leader_Network
    Data_Flow --> Database
    Leader_Network --> Database
    Users --> Failover
    Failover --> Users


```

# 🌍 গ্লোবাল SR-P2P সিস্টেম: সম্পূর্ণ আর্কিটেকচার ডকুমেন্টেশন
## (১ বিলিয়ন ইউজারের জন্য ডিজাইন করা - জিরো সার্ভার কস্ট)

### 📋 সূচিপত্র
1. [ভূমিকা ও মূল কনসেপ্ট](#১-ভূমিকা-ও-মূল-কনসেপ্ট)
2. [আর্কিটেকচারের মূল স্তম্ভ](#২-আর্কিটেকচারের-মূল-স্তম্ভ)
3. [ব্লম্প ডাটাবেজ কৌশল](#৩-ব্লম্প-ডাটাবেজ-কৌশল)
4. [১৬ সেক্টর লিডার সিস্টেম](#৪-১৬-সেক্টর-লিডার-সিস্টেম)
5. [গডফাদার মেকানিজম](#৫-গডফাদার-মেকানিজম)
6. [P2P মেশ নেটওয়ার্ক](#৬-p2p-মেশ-নেটওয়ার্ক)
7. [ফ্রন্ট-এন্ড কম্প্রেশন](#৭-ফ্রন্ট-এন্ড-কম্প্রেশন)
8. [সিগন্যালিং ও ডিসকভারি](#৮-সিগন্যালিং-ও-ডিসকভারি)
9. [ফেইলওভার ও সেলফ-হিলিং](#৯-ফেইলওভার-ও-সেলফ-হিলিং)
10. [স্কেলেবিলিটি অ্যানালাইসিস](#১০-স্কেলেবিলিটি-অ্যানালাইসিস)
11. [নিরাপত্তা ও চ্যালেঞ্জ](#১১-নিরাপত্তা-ও-চ্যালেঞ্জ)
12. [১ বিলিয়ন ইউজারের গণিত](#১২-১-বিলিয়ন-ইউজারের-গণিত)

---

## ১. ভূমিকা ও মূল কনসেপ্ট

**SR-P2P (System Request Peer-to-Peer)** হলো একটি বৈপ্লবিক আর্কিটেকচার যা ১০ কোটি থেকে শুরু করে ১০০ কোটি (১ বিলিয়ন) ইউজারকে **কোনো সেন্ট্রাল সার্ভার ছাড়াই** কানেক্ট করার ক্ষমতা রাখে। পুরো সিস্টেমটি চলে ইউজারদের ব্রাউজারের মধ্যে, এবং ডাটা সংরক্ষণ করা হয় **ব্লম্প (Blomp)** -এ যা একটি JSON স্টোরেজ সার্ভিস।

### মূল দর্শন
প্রতি সেকেন্ডে ১টি করে নতুন ইউজার যোগ হবে, এবং সিস্টেম নিজেই নিজেকে ম্যানেজ করবে। কোনো সেন্ট্রাল সার্ভার নেই, কোনো ব্যান্ডউইথ খরচ নেই, শুধু Pure P2P ম্যাজিক।

### কেন এই সিস্টেম ইউনিক
**কোনো সার্ভার নেই** মানে VPS-এর মাসিক বিল নেই। **P2P সংযোগ** মানে ইউজাররা সরাসরি কথা বলে, সার্ভারে না। **১৬ কল/সেকেন্ড** মানে ১ বিলিয়ন ইউজার হলেও মাত্র ১৬ বার ডাটাবেজে কল। **সেলফ-হিলিং** মানে কোনো লিডার অফলাইন হলে সাথে সাথে অন্য ইউজার দায়িত্ব নেয়।

---

## ২. আর্কিটেকচারের মূল স্তম্ভ

পুরো সিস্টেম ৬টি লেয়ারে বিভক্ত।

### লেয়ার ১: ক্লাউডফ্লেয়ার পেজেস
এটি হলো স্ট্যাটিক হোস্টিং লেয়ার। nepsenx.pages.dev এবং অন্যান্য সাবডোমেইন থেকে গিটহাব রিপোজিটরি অটো ডিপ্লয় হয়। ২৮৫টিরও বেশি লোকেশনে CDN ক্যাশে থাকে। index.html (খালি শেল) এবং TSX (কোর ইঞ্জিন) ইউজারদের ব্রাউজারে সার্ভ করা হয়।

### লেয়ার ২: ফ্রন্ট-এন্ড কম্প্রেশন
প্রতিটি ইউজারের ব্রাউজারে Brotli বা Gzip কম্প্রেশন চলে যা ডাটা সাইজ ৯০% পর্যন্ত কমিয়ে দেয়। JSON ডাটাকে বাইনারি সিরিয়ালাইজেশন এবং প্রোটোকল বাফার স্টাইল প্যাকিং করা হয়।

### লেয়ার ৩: ব্লম্প বুটস্ট্র্যাপ
এখানে bootstrap.json.gz ফাইল থাকে যাতে গডফাদার ও লিডারদের আইপি সংরক্ষিত থাকে। online_users.json.gz ফাইলে কে অনলাইন আছে তার তালিকা থাকে। IP-HOLDER.json.gz-এ সকল আইপির ডিরেক্টরি থাকে।

### লেয়ার ৪: গডফাদার নোড
ইউজার #০০১ হলো গডফাদার। সে প্রতি সেকেন্ডে লিডার রোটেশন করে, নেটওয়ার্ক হেলথ মনিটর করে এবং ১৬ জন লিডার নিয়োগ দেয়।

### লেয়ার ৫: ১৬ সেক্টর লিডার
ইউজার #০০২ থেকে #০১৭ পর্যন্ত ১৬ জন লিডার। তারা হলো আইপি-হোল্ডার, হোম-ফিড, প্রোফাইল, লগইন-অথ, সেটিংস, আর্টিকেল, ড্যাশ-ওপেনএ, ড্যাশ-অ্যাডাপ্টার, পেমেন্ট, শপ, লার্ন, লার্ন-পার্ট, গেমস, ক্ল্যান, লাইভ-বাসিকনো এবং লাইভ-ইশিহি লিডার।

### লেয়ার ৬: রেগুলার ইউজার
ইউজার #০১৮ থেকে শুরু করে অসংখ্য ইউজার। তারা P2P মেশ নেটওয়ার্কে সংযুক্ত থাকে এবং শুধু নিজেদের পৃষ্ঠার লিডার ও আইপি-হোল্ডারের সাথে কথা বলে।

---

## ৩. ব্লম্প ডাটাবেজ কৌশল

### ব্লম্প কী
ব্লম্প是一个 JSON স্টোরেজ সার্ভিস যা সরাসরি ব্রাউজার থেকে CRUD অপারেশন সাপোর্ট করে। এটি WebSocket সাপোর্ট না করলেও REST API-র মাধ্যমে ডাটা পড়া ও লেখা যায়।

### রিড অপারেশন
ইউজারের ব্রাউজার থেকে সরাসরি ব্লম্পে GET রিকোয়েস্ট পাঠানো হয়। যেমন fetch('blomp-url/user_001.json.gz') করে ডাটা আনা হয়। এই ডাটা gzip বা brotli কম্প্রেসড থাকে, তাই ব্রাউজারে ডিকম্প্রেস করে নিতে হয়। আইপি-হোল্ডার ফাইল এবং বুটস্ট্র্যাপ ফাইল সবচেয়ে বেশি পড়া হয়।

### রাইট অপারেশন
ডাটা পাঠানোর আগে ব্রাউজারেই JSON ডাটাকে Gzip বা Brotli দিয়ে কম্প্রেস করা হয়। তারপর সরাসরি ব্লম্পে PUT রিকোয়েস্ট পাঠানো হয়। লিডাররা প্রতি সেকেন্ডে ১ বার ব্যাচ আপডেট করে, যাতে ১৬ কল/সেকেন্ডের লিমিট মেনটেইন করা যায়।

### এডিট অপারেশন ও রেস কন্ডিশন
যখন দুইজন ইউজার একসাথে একই ফাইল এডিট করে, তখন ডাটা লস্ট হওয়ার সম্ভাবনা থাকে। এর সমাধান হলো version control বা ETag ব্যবহার করা। প্রথমে ফাইল ডাউনলোড করে এর ETag হেডার সেভ করে রাখতে হয়। এডিট করার পর PUT রিকোয়েস্টে If-Match হেডার দিয়ে ETag পাঠাতে হয়। যদি কেউ আগেই এডিট করে থাকে, তাহলে ৪১২ স্ট্যাটাস কোড ফিরে আসে এবং তখন মর্জি অনুযায়ী ম্যানেজ করা যায়।

### ব্লম্প ফাইল স্ট্রাকচার
ব্লম্প অ্যাকাউন্টে bootstrap.json.gz (সবচেয়ে গুরুত্বপূর্ণ), online_users.json.gz, ip-holder.json.gz এবং sectors ফোল্ডারে ১৬টি JSON ফাইল থাকে। এছাড়া users ফোল্ডারে ১ বিলিয়ন ইউজারের নিজস্ব ডাটা ফাইল থাকে।

---

## ৪. ১৬ সেক্টর লিডার সিস্টেম

### কেন ১৬
১৬ হলো ২ এর পাওয়ার, যা কম্পিউটারের জন্য পারফেক্ট। এর চেয়ে বেশি লিডার নিলে তাদের মধ্যে কমিউনিকেশন জটিল হয়ে যায়। ১৬ লিডার এবং ১ গডফাদার মিলিয়ে ১৭ জন সর্বোচ্চ অ্যাক্টিভ লিডার, যারা প্রতি সেকেন্ডে রোটেট হয়।

### আইপি-হোল্ডার লিডার
এই লিডার সবার আইপি ও ডিভাইস তথ্য সংরক্ষণ করে। প্রতি ইউজারের পাবলিক আইপি, রিয়েল আইপি, ডিভাইসের ব্রাউজার, অপারেটিং সিস্টেম, স্ক্রিন সাইজ, মেমোরি, কোর সংখ্যা, কানেকশন টাইপ (ওয়াইফাই/মোবাইল), স্পিড, লেটেন্সি, হেলথ স্কোর, শেষ দেখা এবং আপটাইম সব তথ্য রাখে। গডফাদার অফলাইন হলে এই লিডার নতুন গডফাদার নিয়োগ দেয়।

### হোম-ফিড লিডার
OpenA হোমপেজের ফিড ম্যানেজ করে। হাজার হাজার আপডেট প্রতি সেকেন্ডে এগ্রিগেট করে। সর্বশেষ ৫০ পোস্টের ক্যাশে রাখে এবং ট্রেন্ডিং টপিক ক্যালকুলেট করে।

### প্রোফাইল লিডার
সকল ইউজারের বায়ো, স্ট্যাটাস (অনলাইন/অফলাইন), প্রোফাইল ভিউ কাউন্টার, কাস্টমাইজেশন সেটিংস এবং অ্যাভাটার ইউআরএল রেফারেন্স সংরক্ষণ করে।

### লগইন-অথ লিডার
P2P হ্যান্ডশেক টোকেন ম্যানেজ করে। অ্যাক্টিভ সেশন ট্র্যাক করে, সেশনের মেয়াদ শেষ হওয়া মনিটর করে এবং লগআউট সিগন্যাল ডিস্ট্রিবিউট করে।

### সেটিংস লিডার
গ্লোবাল UI প্রেফারেন্স সিঙ্ক করে। থিম সেটিংস (ডার্ক/লাইট/সিস্টেম), নোটিফিকেশন প্রেফারেন্স, ভাষা সেটিংস (বাংলা/ইংরেজি) এবং প্রাইভেসি টগল ম্যানেজ করে।

### আর্টিকেল লিডার
লং-ফর্ম আর্টিকেলের স্টেট ম্যানেজ করে। কোলাবোরেটিভ এডিটিং ভার্সন কন্ট্রোল, কমেন্ট সেকশন সিঙ্ক, আর্টিকেল লক মেকানিজম এবং রিড রিসিট ট্র্যাকার রাখে।

### ড্যাশ-ওপেনএ লিডার
প্ল্যাটফর্ম স্ট্যাটিস্টিক্স, ইউজার গ্রোথ মেট্রিক্স, এনগেজমেন্ট রিপোর্ট, পেজ ভিউ অ্যানালিটিক্স এবং রিটেনশন ক্যালকুলেশন করে।

### ড্যাশ-অ্যাডাপ্টার লিডার
অ্যাডাপ্টেশন মেট্রিক্স, এ/বি টেস্ট ডাটা, পারফরম্যান্স অপ্টিমাইজেশন স্কোর, ফিচার অ্যাডপশন ট্র্যাকিং এবং ইউজার ফিডব্যাক এগ্রিগেশন ম্যানেজ করে।

### পেমেন্ট লিডার
P2P ট্রানজেকশন সিগন্যালিং, ভার্চুয়াল ব্যালেন্স ট্র্যাকার, পেমেন্ট হিস্টোরি (সর্বশেষ ১০০), এসক্রো সার্ভিস স্টেট এবং ইনভয়েস জেনারেটর হিসেবে কাজ করে।

### শপ লিডার
মার্কেটপ্লেস স্টেট ম্যানেজ করে। প্রোডাক্ট ইনভেন্টরি (১০০ আইটেম), অর্ডার সিঙ্ক্রোনাইজেশন, সেলার-বায়ার ব্রিজ, কার্ট স্টেট ট্র্যাকার এবং প্রোডাক্ট রিভিউ ক্যাশে রাখে।

### লার্ন লিডার
এডুকেশন হাব ম্যানেজ করে। কোর্স মডিউল স্টেট, প্রোগ্রেস ট্র্যাকার (১০০ ইউজার), কুইজ/অ্যাসেসমেন্ট স্টেট, সার্টিফিকেট জেনারেটর এবং লার্নিং পাথ অপ্টিমাইজার হিসেবে কাজ করে।

### লার্ন-পার্ট লিডার
কোলাবোরেটিভ লার্নিং ম্যানেজ করে। স্টাডি গ্রুপ কোঅর্ডিনেটর, গ্রুপ অ্যাসাইনমেন্ট সিঙ্ক, পিয়ার রিভিউ সিস্টেম, ডিসকাশন থ্রেড এবং রিসোর্স শেয়ারিং স্টেট রাখে।

### গেমস লিডার
গেমিং ইঞ্জিন হিসেবে কাজ করে। রিয়েল-টাইম গেম স্টেট, মাল্টিপ্লেয়ার ফিজিক্স সিঙ্ক, স্কোরবোর্ড আপডেট (১০০ প্লেয়ার), ম্যাচমেকিং কোঅর্ডিনেটর এবং গেম ইনভাইট হ্যান্ডলার ম্যানেজ করে।

### ক্ল্যান লিডার
কমিউনিটি ম্যানেজমেন্ট করে। গ্রুপ/গিল্ড ডাটা (১০ টি ক্ল্যান), ক্ল্যান চ্যাট সিঙ্ক্রোনাইজেশন, শেয়ার্ড রিসোর্স ট্র্যাকার, ক্ল্যান ওয়ার স্টেট এবং মেম্বার অ্যাক্টিভিটি লগ রাখে।

### লাইভ-বাসিকনো লিডার
প্রাইমারি ব্রডকাস্ট হাব। লাইভ স্ট্রিম মেটাডাটা, ভিউয়ার কাউন্ট সিঙ্ক (০-১০০০), স্ট্রিম হেলথ মনিটর, চ্যাট মডারেশন স্টেট এবং রেকর্ডিং শিডিউলার ম্যানেজ করে।

### লাইভ-ইশিহি লিডার
সেকেন্ডারি ব্রডকাস্ট হাব। অল্টারনেটিভ স্ট্রিম ফিড, ভিডিও কোয়ালিটি অ্যাডাপ্টার, স্ট্রিম ফেইলওভার হ্যান্ডলার, মাল্টি-বিটরেট এনকোডার স্টেট এবং স্ট্রিম ব্যাকআপ কোঅর্ডিনেটর হিসেবে কাজ করে।

---

## ৫. গডফাদার মেকানিজম

### গডফাদার কে
গডফাদার হলো সেই বিশেষ ইউজার যে পুরো নেটওয়ার্ককে কন্ট্রোল করে। সে আসলে ইউজার #০০১ (প্রথম ইউজার), কিন্তু প্রতি সেকেন্ডে তার ভূমিকা পরিবর্তন হতে পারে। তাকে বেছে নেওয়া হয় হেলথ স্কোরের ভিত্তিতে।

### গডফাদারের কাজ
প্রতি সেকেন্ডে গডফাদার ৫টি ধাপে কাজ করে। প্রথমে আইপি-হোল্ডার থেকে সব ইউজারের আইপি ও ডিভাইস তথ্য সংগ্রহ করে। তারপর হেলথ স্কোর ক্যালকুলেট করে। এই স্কোর বের করার ফর্মুলায় আপটাইম ৪০%, ব্যান্ডউইথ ৩০% এবং লেটেন্সি ৩০% ওয়েটেজ পায়। এরপর টপ ১৬ হেলদিয়েস্ট ইউজারকে সিলেক্ট করে পরবর্তী সেকেন্ডের জন্য লিডার নিয়োগ দেয়। তারপর P2P মেসেজের মাধ্যমে নতুন লিডারদের হ্যান্ডওভার জানায়। সবশেষে নিজের লোকাল মেমোরি আপডেট করে।

### গডফাদার হওয়ার শর্ত
গডফাদার হতে হলে সবচেয়ে হেলদি ইউজার হতে হবে। স্টেবল কানেকশন (ওয়াইফাই বা ইথারনেট, মোবাইল না) থাকতে হবে। লো লেটেন্সি (১০০ms-এর কম), হাই ব্যান্ডউইথ (৫০ Mbps-এর বেশি) এবং লং আপটাইম (১ ঘণ্টার বেশি) থাকতে হবে।

---

## ৬. P2P মেশ নেটওয়ার্ক

### WebRTC ডাটা চ্যানেল
প্রতিটি ইউজারের ব্রাউজারে WebRTC ডাটা চ্যানেল সেটআপ হয়। STUN সার্ভার ব্যবহার করে আইপি ডিসকভারি করা হয়। ডাটা চ্যানেল অর্ডারড এবং ম্যাক্সিমাম ৩ বার রিট্রান্সমিট হয়। চ্যানেল ওপেন হলে হেলথ চেক শুরু হয় এবং মেসেজ হ্যান্ডলিং শুরু হয়।

### মেশ টপোলজি
ছোট গ্রুপের জন্য সম্পূর্ণ মেশ (Full Mesh) ব্যবহার করা হয় যেখানে n*(n-1)/2 টি কানেকশন থাকে। বড় নেটওয়ার্কের জন্য হাইব্রিড মেশ ব্যবহার করা হয়, যেখানে লিডাররা ফুল মেশে থাকে এবং সাধারণ ইউজাররা স্টার টপোলজিতে লিডারের সাথে থাকে।

### গসিপ প্রোটোকল
মেসেজ রিলে করার জন্য গসিপ প্রোটোকল ব্যবহার করা হয়। প্রতিটি মেসেজ ৩-৫ হপ পর্যন্ত যায়। প্রতি সেকেন্ডে হেলথ চেক হয় এবং ৩ বার চেষ্টার পর মেসেজ ড্রপ করা হয়।

### সেক্টর ক্লাস্টারিং
ইউজার শুধু তার বর্তমান পৃষ্ঠার লিডার ও আইপি-হোল্ডারের সাথে কথা বলে। যখন ইউজার এক পৃষ্ঠা থেকে অন্য পৃষ্ঠায় যায়, তখন সে পুরনো লিডার থেকে ডিসকানেক্ট হয়ে নতুন লিডারের সাথে কানেক্ট হয়। শুধু আইপি-হোল্ডার সবসময় কানেক্টেড থাকে।

---

## ৭. ফ্রন্ট-এন্ড কম্প্রেশন

### কেন কম্প্রেশন জরুরি
১ বিলিয়ন ইউজার থাকলে কম্প্রেশন ছাড়া ব্যান্ডউইথ হবে ১০০ MB/sec, যা Blomp-এর রেট লিমিটের বাইরে। কম্প্রেশন সহ ব্যান্ডউইথ হয় মাত্র ১০ MB/sec।

### কম্প্রেশন স্ট্র্যাটেজি
প্রথম স্তরে JSON মিনিফিকেশন করা হয়, যেখানে লম্বা কী নাম ছোট করা হয় (যেমন userId → u)। দ্বিতীয় স্তরে Brotli বা Gzip কম্প্রেশন করা হয়। ব্রাউজার CompressionStream সাপোর্ট করলে Brotli ব্যবহার করা হয়, না হলে pako দিয়ে Gzip। তৃতীয় স্তরে বাইনারি সিরিয়ালাইজেশন করা হয় প্রোটোকল বাফার স্টাইলে।

### ডাটা টাইপ অনুযায়ী কম্প্রেশন
টেক্সট মেসেজের জন্য Brotli ১১ লেভেলে ৯৫% রিডাকশন পাওয়া যায়। JSON অবজেক্টের জন্য Gzip ৯ লেভেলে ৯০% রিডাকশন হয়। ইমেজ URL স্ট্রিং মিনিফাই করে ৫০% রিডাকশন হয়। অ্যারে বাইনারি সিরিয়ালাইজ করে ৮৫% রিডাকশন হয়।

---

## ৮. সিগন্যালিং ও ডিসকভারি

### ব্লম্প-বেসড সিগন্যালিং
যেহেতু Blomp WebSocket সাপোর্ট করে না, তাই ব্লম্পকেই সিগন্যালিং সার্ভার হিসেবে ব্যবহার করা হয়। ইউজার অনলাইনে এলে online_users.json-এ নিজের তথ্য লেখে। সিগন্যাল (WebRTC offer) store-signals ফোল্ডারে সংরক্ষণ করে। প্রতি ৩০ সেকেন্ড পর পর পোলিং করে নতুন সিগন্যাল চেক করে।

### ৩০ সেকেন্ড পোলিং কেন
Blomp-এর রেট লিমিট ৬০ request/minute। ৩০ সেকেন্ড পোলিং মানে ২ request/minute, যা নিরাপদ। ১ বিলিয়ন ইউজার থাকলে সবাই পোল করলে ২ বিলিয়ন request/minute হতো, যা Blomp ব্লক করত। সমাধান হলো শুধু ১৭ জন (গডফাদার + ১৬ লিডার) পোল করে = ৩৪ request/minute। বাকি ১ বিলিয়ন ইউজার লিডারদের কাছ থেকে P2P-তে রিয়েল-টাইম ডাটা পায়।

### নিউ ইউজার ডিসকভারি
নতুন ইউজার আসলে প্রথমে bootstrap.json পড়ে গডফাদার ও লিডারদের আইপি জানে। তারপর আইপি-হোল্ডারে নিজের তথ্য পাঠায়। online_users.json-এ নিজেকে যুক্ত করে। গডফাদারের সাথে WebRTC কানেক্ট করে। তার পৃষ্ঠার লিডারদের সাথে কানেক্ট করে। সবশেষে পোলিং শুরু করে।

---

## ৯. ফেইলওভার ও সেলফ-হিলিং

### আইপি-হোল্ডার ফেইলওভার
প্রতি ১০০ms হেলথ চেক করা হয় বর্তমান আইপি-হোল্ডার লিডারকে। যদি সে সাড়া না দেয়, তাহলে গডফাদারকে জানানো হয়। পরবর্তী হেলদি ইউজার (#০৮৭) সিলেক্ট করা হয়। বর্তমান স্টেট (সকল আইপি ও ডিভাইস তথ্য) নতুন লিডারকে P2P মেসেজে পাঠানো হয়। নতুন লিডার হ্যান্ডওভার নিশ্চিত করলে বুটস্ট্র্যাপ আপডেট করা হয়। পুরো প্রসেস ১০০ms-এর মধ্যে সম্পন্ন হয়।

### গডফাদার ফেইলওভার
IP-HOLDER প্রতি সেকেন্ডে গডফাদারকে মনিটর করে। যদি গডফাদার সাড়া না দেয়, তাহলে IP-HOLDER নিজেই নতুন গডফাদার হয়। সে নেটওয়ার্ক ম্যাপ (সকল ইউজারের আইপি ও হেলথ স্কোর) নেয়। সব লিডারকে P2P মেসেজে নতুন গডফাদার জানায়। তার পুরনো IP-HOLDER পদটি পরবর্তী হেলদি ইউজারকে (#০৮৭) দেয়। বুটস্ট্র্যাপ আপডেট করে। পুরো প্রসেস ১ সেকেন্ডের মধ্যে সম্পন্ন হয়।

### জিরো-ডাউনটাইম ট্রান্সফার
প্রতি সেকেন্ডে স্টেট মিররিং করা হয়, যেখানে বর্তমান লিডার এবং পরবর্তী প্রার্থীর মধ্যে স্টেট সিঙ্ক থাকে। হ্যান্ডওভার প্রসেসে চারটি ধাপ থাকে: প্রিপেয়ার (ব্যাকআপ প্রস্তুত), সিঙ্ক (শেষ ডাটা সিঙ্ক), কমিট (নতুন লিডার অ্যাক্টিভ) এবং কনফার্ম (সকলের নিশ্চিতকরণ)। যদি হ্যান্ডওভার ব্যর্থ হয়, তাহলে ফলব্যাক হিসেবে পুরনো লিডার ২ সেকেন্ড পর্যন্ত কাজ চালিয়ে যায় এবং ৩ বার রিট্রাই করে।

---

## ১০. স্কেলেবিলিটি অ্যানালাইসিস

### ডাটাবেজ কল
প্রতি সেকেন্ডে মাত্র ১৬ কল হয় (শুধু লিডাররা)। প্রতি মিনিটে ৯৬০ কল, যা Blomp-এর ৬০/মিনিট লিমিটের অনেক নিচে। প্রতি মাসে ৪১ মিলিয়ন কল হয়, Blomp-এর লিমিট ~১০০ মিলিয়ন/মাস, তাই ৬০% ফ্রি থাকে।

### ব্যান্ডউইথ
প্রতি ইউজার প্রতিদিন ১০MB ডাটা ট্রান্সফার করে (কম্প্রেসড)। ১ বিলিয়ন ইউজারের জন্য দৈনিক ১০ পেটাবাইট ট্রান্সফার হয়, যা ক্লাউডফ্লেয়ার CDN হ্যান্ডেল করে। VPS-এর কোনো egress খরচ নেই কারণ কোনো সার্ভার নেই।

### P2P সংযোগ
সম্ভাব্য মোট সংযোগ ১ বিলিয়ন স্কয়ার (অসম্ভব)। বাস্তবে প্রতি ইউজার ২-৩টি সংযোগ রাখে। প্রতি লিডার ~১০০০ ইউজারের সাথে সংযুক্ত থাকে। গডফাদার শুধু ১৬ লিডারের সাথে সংযুক্ত থাকে।

### মেমোরি
প্রতি ইউজারের ব্রাউজারে ~৫০MB মেমোরি লাগে। ১ বিলিয়ন ইউজার থাকলে মোট মেমোরি লাগে ৫০ পেটাবাইট, যা ইউজারদের নিজ নিজ ডিভাইস থেকে আসে।

### প্রসেসিং পাওয়ার
গডফাদার প্রতি সেকেন্ডে ১০০ ইউজারের হেলথ স্কোর ক্যালকুলেট করে। ১৬ লিডার প্রতি সেকেন্ডে হাজার হাজার মেসেজ প্রসেস করে। সকল প্রসেসিং ইউজারদের ব্রাউজারে হয়।

---

## ১১. নিরাপত্তা ও চ্যালেঞ্জ

### ব্লম্প API কী নিরাপত্তা
সবচেয়ে বড় চ্যালেঞ্জ হলো ব্লম্প API কী ফ্রন্ট-এন্ড কোডে থাকলে যে কেউ সব ডাটা ডিলিট করতে পারবে। সমাধান হলো API কী কখনো ফ্রন্ট-এন্ডে না রাখা। পরিবর্তে signed URLs ব্যবহার করা, যেখানে লিডাররা স্বল্পমেয়াদী টোকেন জেনারেট করে ইউজারদের দেয়।

### রেস কন্ডিশন
দুই ইউজার একসাথে একই JSON ফাইল এডিট করলে ডাটা লস্ট হওয়ার সম্ভাবনা। সমাধান হলো ETag-based optimistic locking। PUT রিকোয়েস্টে If-Match হেডার দিয়ে ETag পাঠাতে হবে। Conflict হলে ৪১২ স্ট্যাটাস পেয়ে merge বা retry করতে হবে।

### DDoS অ্যাটাক
কেউ যদি হাজার হাজার ফেক ইউজার ক্রিয়েট করে, তাহলে ব্লম্প রেট লিমিটে চলে যাবে। সমাধান হলো proof-of-work চ্যালেঞ্জ। নতুন ইউজারকে একটি ছোট ক্যালকুলেশন করতে হবে (যেমন হ্যাশ ফাইন্ড) প্রমাণ করতে যে সে রিয়েল ইউজার।

### ম্যালিসিয়াস লিডার
কোনো লিডার যদি ভুল ডাটা পাঠায় বা অন্যান্য ইউজারকে ব্লক করে। সমাধান হলো multiple leaders voting। গুরুত্বপূর্ণ সিদ্ধান্তের জন্য ৩ জন লিডারের মতামত নেওয়া এবং majority ভোট গ্রহণ করা।

### প্রাইভেসি
সকলের আইপি IP-HOLDER-এ সংরক্ষিত থাকে, যা প্রাইভেসি রিস্ক। সমাধান হলো partial IP storage। শুধু প্রথম ২ অক্টেট সংরক্ষণ করা, যেমন ১৯২.১৬৮.x.x। ইউজারদের অপশন দেওয়া যে তারা তাদের আইপি শেয়ার করবে কিনা।

---

## ১২. ১ বিলিয়ন ইউজারের গণিত

### প্রতি সেকেন্ডে কত ইউজার যোগ হয়
সিস্টেম ডিজাইন করা হয়েছে প্রতি সেকেন্ডে ১ টি নতুন ইউজার যোগ হওয়ার জন্য। ১ বিলিয়ন ইউজার পেতে সময় লাগবে ১ বিলিয়ন সেকেন্ড = প্রায় ৩১.৭ বছর। বাস্তবে, ভাইরাল হলে এই সংখ্যা অনেক বেশি হতে পারে, কিন্তু সিস্টেম হ্যান্ডেল করবে কারণ লিডার রোটেশন মেকানিজম স্কেলেবল।

### ডাটা সাইজ ক্যালকুলেশন
প্রতি ইউজারের জন্য ~১KB ডাটা সংরক্ষিত হয় (কম্প্রেসড)। ১ বিলিয়ন ইউজারের জন্য ১ টেরাবাইট ডাটা লাগে। Blomp-এ ২০০GB ফ্রি, তাই বাকি ৮০০GB-এর জন্য পেইড প্ল্যান নিতে হবে।

### ব্যান্ডউইথ ক্যালকুলেশন
প্রতি ইউজার প্রতিদিন ~১০MB ট্রান্সফার করে। ১ বিলিয়ন ইউজারের জন্য দৈনিক ১০ পেটাবাইট ট্রান্সফার। ক্লাউডফ্লেয়ার ফ্রি টিয়ারে ১ পেটাবাইট/মাস দেয়, তাই পেইড প্ল্যান নিতে হবে।

### API কল ক্যালকুলেশন
লিডাররা ১৬ কল/সেকেন্ড = ১.৩৮ মিলিয়ন কল/দিন = ৪১ মিলিয়ন কল/মাস। ব্লম্প ফ্রি টিয়ারে রেট লিমিট কত তা স্পষ্ট না, ধরে নিলে ~১০০ মিলিয়ন/মাস, তাহলে ৬০% ফ্রি থাকে।

### পাওয়ার কনজাম্পশন
প্রতি ইউজারের ব্রাউজারে ~০.১ ওয়াট পাওয়ার লাগে। ১ বিলিয়ন ইউজারের জন্য মোট ১০০ মেগাওয়াট পাওয়ার লাগে, যা ইউজারদের নিজ নিজ ডিভাইস থেকে আসে।

### কার্বন ফুটপ্রিন্ট
প্রতি ইউজার প্রতি মাসে ~০.৫kg CO2 উৎপন্ন করে। ১ বিলিয়ন ইউজারের জন্য মাসিক ৫০০ মিলিয়ন kg CO2, যা প্রায় ১ লক্ষ গাড়ির সমান।

---

## উপসংহার

SR-P2P সিস্টেম ১ বিলিয়ন ইউজার হ্যান্ডেল করতে সক্ষম কারণ এটি **সেন্ট্রালাইজড সার্ভার সম্পূর্ণ এড়িয়ে চলে**। সব লজিক ও প্রসেসিং ইউজারদের ব্রাউজারে হয়। ডাটাবেজ কল মাত্র ১৬/সেকেন্ডে সীমিত। লিডার রোটেশন মেকানিজম লোড ব্যালেন্স করে। ফেইলওভার সিস্টেম সেলফ-হিলিং নিশ্চিত করে।

**চ্যালেঞ্জগুলি** আছে যেমন ব্লম্প API কী নিরাপত্তা, রেস কন্ডিশন, DDoS অ্যাটাক, কিন্তু প্রতিটির জন্য সমাধান আছে।

**সবচেয়ে বড় অ্যাচিভমেন্ট** হলো এই সিস্টেম **কোনো সার্ভার খরচ ছাড়াই** ১ বিলিয়ন ইউজার সার্ভ করতে পারে। শুধু ক্লাউডফ্লেয়ার পেজেস (ফ্রি) এবং ব্লম্প (ফ্রি ২০০GB) ব্যবহার করে।
---
## Server system

(Oracle 2 vps)

### (1) Safe-Data-Transfer Logic

```mermaid
flowchart TD
    %% Definitions for AI context
    subgraph Data_Architecture ["Safe-Data-Transfer Logic"]
        direction TB
        L1["Step 1: Edge Caching (Cloudflare)"]
        L2["Step 2: Bandwidth Offloading"]
        L3["Step 3: Internal Network Privacy"]
    end
    subgraph Cache_Root_Logic ["CDN & Root Integration"]
        direction TB
        U1[("User 1")] & U2[("User 2")] & U3[("User 3")]
        CDN["Cloudflare (CDN Root Layer)"]
        VPS[("NepsenX VPS (Origin Root)")]

        U1 & U2 & U3 -- Request Assets --> CDN
        CDN -- Cache HIT --> U1 & U2 & U3
        CDN -- Cache MISS --> VPS
        VPS -- Deliver Binary Data --> CDN
        CDN -- Store and Forward --> U1 & U2 & U3
        U1 & U2 & U3 -.->|Result: Zero VPS Egress Bandwidth| CDN
    end

```

#### for: http request, html,css,tsx,img... file opening , server security , save previous file which user seen and it will not take from vps

### (2) DB system

```mermaid
flowchart TD
    subgraph Clients ["Many Users (Application Client)"]
        U["Integrated User Pool"]
    end

    subgraph VPS_System ["Oracle Cloud System V2.0"]
        direction TB
        VPS1["VPS-1: System Brain (Socket.io)"]
        VPS2[("VPS-2: DB Server (Private Bridge)")]
    end

    %% Connection Logic
    U <-->|Socket.io: Realtime Data| VPS1
    VPS1 <-->|Private IP: 0 Bandwidth Bridge| VPS2

    %% Data Categorization
    subgraph DB_Schema ["DB Storage (Text Only)"]
        User_Profile["Profile_Auth
         IP, Name, Email, Password, Birth,About, Posts, Dates , notification"]
        adupter["Adupter
        Credits, plan, text,img-video-url, article,"]
        OpenA["OpenA
        Shop Products,post, Account Data , dashboard ,group_ip,text,img-video-url,learn section , user-ip"]
        ishahi["ishahi
         group_ip,text,img-video-url"]
        basikno["basikno
         Everything Learning Platform: group_ip,text,img-video-url,learn section"]
        vb["virtubrowse
         -None-"]
        home["home
         Live Dashboard: Show all users a section with 'Active Now' count + Realtime Map/List of locations (where from).
         Logic: Tracks user_active in all products (realtime) and previous data analysis (visits, origins, behavior) excluding 'virtubrowse' (vb) for privacy."]
        cg["CG
         clan_ip(who host a clan that user_ip),clan_img_url , clan_name , clan_all_member_ip"]
        oracus["Oracus AI
         credit , (if have credit : text,img-video-url , url , chat_id)"]
    end

    subgraph Media_Storage ["External Media Strategy"]
        Media_Links["Stored as External URLs"]
        APIs["img2url / video2url API Services"]
    end

    VPS2 === ishahi
    VPS2 === User_Profile
    VPS2 === OpenA
    VPS2 === adupter
    VPS2 === basikno
    VPS2 === oracus
    VPS2 === cg
    VPS2 === home

    User_Profile & OpenA & adupter & ishahi & basikno & oracus & cg -.->|Pointer| Media_Links
    Media_Links --- APIs
```

#### for: any data transfer like : user ip , name , email , password , birth , profile img , about them , post , products of shop of openA,dashboard,account credit,opening date ,... and so on . but the db place only text , mens the img , video ...file save as external link by img2url or video2url api's) :many User - socket.io (realtime connected) - NepsenX vps -(private connection for 0 Bandwidth)-DB vps .

### (3) Realtime system

```mermaid
flowchart TD
    subgraph Users ["Many Users (P2P Mesh)"]
        direction LR
        U1["User A"] <-->|WebRTC: Chat/Voice/Video| U2["User B"]
    end

    subgraph Server_Signals ["Realtime Control (VPS-1)"]
        S["Socket.io (Signaling & Tracking)"]
    end

    subgraph Private_Storage ["Data Sync (VPS-2)"]
        DB[("Private DB Server")]
    end

    %% Signaling Path
    U1 & U2 <-->|Realtime Socket Connection| S

    %% Internal Tracking
    S <-->|Private Network: IP/Host Update| DB

    %% Data stored in VPS-2 for Realtime
    DB --- Active_IPs["Active IP Addresses"]
    DB --- Group_IPs["Group/Clan IPs (Host Tracker)"]

    %% Result
    Users -.->|Result: Ultra Low Latency / High Scale| Server_Signals
```

#### For: : chat, voice call, video call, stream a clan or host a clan, notification, share, file transferring, ..

### (4) short-bandwidth-Transfer (The 1GB Zero Bandwidth Trick)

```mermaid
flowchart TD
    subgraph Client_Env ["User Device (Extension/PWA)"]
        direction TB
        USR(["User Access"])
        SW["The Extension (index.tsx Loader)"]
    end

    subgraph NepsenX_Core ["VPS System (Oracus)"]
        direction TB
        VPS1["VPS-1: System Brain / Gateway"]
        VPS2["VPS-2: Private DB / Storage"]
        PC[["Private Connect (0-BW Tunnel)"]]
    end

    %% Connection Chain Flow
    USR -- "1. Connect (Metadata Request)" --> VPS1
    VPS1 -- "2. Private Bridge (0-BW)" --> VPS2

    %% The Trick Flow (After reading index.tsx)
    USR -- "3. Load index.tsx Key" --> SW
    SW -- "4. Open Secret Channel" --> PC
    PC <-->|5. Sync 1-2GB Data Chain| VPS1
    VPS1 <-->|6. Fetch from Private Source| VPS2

    %% Result
    PC -.->|Final Result: 20-30kb/user Bandwidth VPS Egress| USR
```

#### The "Private Connect" Chained Logic (চেইন কানেকশন কৌশল):

১. **ইউজার টু ভিপিএস-১:** ইউজার সবার আগে মেইন **VPS-1** (System Brain)-এর সাথে কানেক্ট হয়।
২. **ভিপিএস-১ টু ভিপিএস-২:** এরপর **VPS-1** অটোমেটিক **VPS-2**-এর সাথে প্রাইভেটলি কানেক্ট হয় ডাটা আনার জন্য।
৩. **ইনডেক্স কী (Index Key):** ইউজার যখন `index.tsx` ফাইলটি রিড করে, তখন সেটি একটি গেটওয়ে কী হিসেবে কাজ করে।
৪. **চেইন ডাটা ট্রান্সফার:** সার্ভিস ওয়ার্কার যখন `index.tsx` পড়ে ফেলে, তখন সেটি **VPS-1**-এর সাথে একটি সিকিউর হ্যান্ডশেক করে। এই কানেকশনটি **VPS-1**-এর **.env** ফাইলে থাকা সিক্রেট কি (Secret Key) ব্যবহার করে সিকিউর করা থাকে, যাতে বাইরের কেউ এই টানেলে ঢুকতে না পারে। এই চেইনের মাধ্যমে ১-২ জিবি ডাটা ইউজার পর্যন্ত পৌঁছায় কিন্তু ভিপিএস থেকে পাবলিক ডাটা খরচ দেখায় ০ (Zero)!
৫. **সুবিধা ও নিরাপত্তা:** পুরো প্রসেসটি (User to VPS-1) এনক্রিপ্টেড এবং **.env** কি দিয়ে সুরক্ষিত থাকে। ফলে ১ জিবি ডাটা ট্রান্সফার হলেও সেটি সিস্টেমের ব্যান্ডউইথ খরচ হিসেবে গণ্য হয় না এবং ইউজারের ডাটা সব সময় নিরাপদ থাকে।

### (5) Security & Proxy Logic (নিরাপত্তা ও প্রক্সি কৌশল)

```mermaid
flowchart LR
    User[Internet User] --> SSL["SSL/TLS (HTTPS)"]
    SSL --> NGX["Nginx (Reverse Proxy)"]
    NGX --> FW["Firewall (UFW/IPtables)"]

    subgraph Intranet ["Private Network"]
        FW --> VPS1["VPS-1 (System Core)"]
        VPS1 <--> VPS2["VPS-2 (Private Storage)"]
    end

    NGX -.->|Gzip Compression| User
    NGX -.->|DDoS Protection| User
```

#### For: System Security (সার্ভার নিরাপত্তা):

- **Nginx Reverse Proxy:** সরাসরি ভিপিএস পোর্ট এক্সপোজ না করে এটি একটি "পর্দা" হিসেবে কাজ করে। এটি ডাটাকে সংকুচিত (Gzip) করে পাঠায়, ফলে ব্যান্ডউইথ আরও বাঁচে।
- **Auto-SSL (Certbot):** সকল ডাটা এনক্রিপ্টেড থাকে (HTTPS)।
- **Firewall Isolation:** VPS-2 শুধুমাত্র VPS-1 থেকে কানেকশন রিসিভ করবে, বাইরের কেউ এটিকে দেখতেও পারবে না।
- Serv00 আপনার ডাটাবেস এবং ছোট লজিকগুলো সামলাবে।
- Assistant (Worker) আপনার বড় ফাইল এবং জটিল অ্যানালাইসিস সামলাবে (যা Serv00 এর CPU লিমিট বাঁচাবে)।
- index.ts আপনার ১ বিলিয়ন ইউজারকে কোনো লিমিট ছাড়াই সঠিক SaaS-এ ডিরেক্ট করবে।
- Blomp আপনার ২০০ জিবি ডেটা নিরাপদে রাখবে।

### Folder Structure

```text
NepsenX/
├── .dockerignore
├── .env
├── .env.production
├── .env.staging
├── .gitignore
├── .vscode/
│   ├── launch.json
│   └── settings.json
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── docker-compose.yml
├── LICENSE
├── package.json
├── ROADMAP.md
├── SECURITY.md
├── sr.md
├── structure.txt
├── tsconfig.json
├── turbo.json
├── VISION.md
│
├── 📁 frontend/                     # 🚀 Deployed on Cloudflare Pages
│   ├── index.html
│   ├── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── .htaccess
│   │
│   ├── 📁 public/                    # Consolidated from all products
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   ├── index.tsx
│   │   └── sw.tsx
│   │
│   └── 📁 src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── routes.tsx
│       ├── auth.ts
│       ├── socket.ts
│       ├── index.css
│       │
│       ├── 📁 config/                 # ⚙️ Configuration files
│       │   └── products.ts            # Centralized product settings, nav links, and logos
│       │
│       ├── 📁 main-pages/             # 🔄 ONE COPY of each common page
│       │   ├── Home.tsx
│       │   ├── Loading.tsx
│       │   ├── Login.tsx
│       │   ├── Notification.tsx
│       │   ├── profile.tsx
│       │   ├── settings.tsx
│       │   └── Root.tsx
│       │
│       ├── 📁 pages/                   # 🎯 Product‑specific pages
│       │   ├── 📁 adupter/
│       │   │   ├── Dashboard.tsx
│       │   │   └── Database.tsx
│       │   ├── 📁 basikno/
│       │   │   ├── Courses.tsx
│       │   │   └── Live.tsx
│       │   ├── 📁 cg/
│       │   │   ├── Clan.tsx
│       │   │   ├── Games.tsx
│       │   │   ├── Group-Clan.tsx
│       │   │   └── game-pad.tsx
│       │   ├── 📁 home/
│       │   │   └── products.tsx
│       │   ├── 📁 ishahi/
│       │   │   ├── Live.tsx
│       │   │   └── Prayer.tsx
│       │   ├── 📁 opena/
│       │   │   ├── dashboard.tsx
│       │   │   ├── search.tsx
│       │   │   └── shop.tsx
│       │   ├── 📁 oracus_ai/
│       │   │   ├── chat.tsx           # Main Chat Interface
│       │   │   ├── app/
│       │   │   │   ├── layout.tsx
│       │   │   │   ├── page.tsx
│       │   │   │   └── actions.ts
│       │   │   ├── components/
│       │   │   │   └── chat.tsx
│       │   │   └── lib/
│       │   │       └── utils.ts
│       │   ├── 📁 template/
│       │   │   └── ...                # (kept as original)
│       │   └── 📁 virtubrowse/
│       │       ├── Desktop.tsx
│       │       └── browser.tsx
│       │
        ├── 📁 ai/                            # AI modules
        │   ├── bug-detector.ts
        │   ├── code-generator.ts
        │   ├── documentation-generator.ts
        │   ├── performance-analyzer.ts
        │   ├── security-scanner.ts
        │   └── test-generator.ts
        │
        ├── 📁 external/                       # External service integrations
        │   ├── email-service.ts
        │   ├── img2url-api.ts
        │   ├── maps-api.ts
        │   ├── payment-gateways.ts
        │   ├── sms-service.ts
        │   ├── social-auth.ts
        │   └── video2url-api.ts
        │
│       ├── 📁 modules/                 # 🎯 Product‑specific modules (folders only)
│       │   ├── 📁 adupter/
│       │   ├── 📁 basikno/
│       │   │   ├── 📁 ai-tutor/
│       │   │   ├── 📁 assessment/
│       │   │   ├── 📁 course-engine/
│       │   │   └── 📁 live-teaching/
│       │   ├── 📁 cg/
│       │   │   ├── 📁 blackhole-bridge/
│       │   │   ├── 📁 clans/
│       │   │   ├── 📁 game-library/
│       │   │   ├── 📁 game-streaming/
│       │   │   ├── 📁 input-sync/
│       │   │   ├── 📁 multiplayer/
│       │   │   ├── 📁 stream-handler/
│       │   │   └── 📁 tournaments/
│       │   ├── 📁 home/
│       │   ├── 📁 ishahi/
│       │   │   ├── 📁 community/
│       │   │   ├── 📁 hadith/
│       │   │   ├── 📁 prayer/
│       │   │   └── 📁 quran/
│       │   ├── 📁 opena/
│       │   │   ├── 📁 ai/
│       │   │   ├── 📁 marketplace/
│       │   │   ├── 📁 news/
│       │   │   ├── 📁 social/
│       │   │   └── 📁 streaming/
│       │   └── 📁 virtubrowse/
│       │       ├── 📁 os/
│       │       ├── 📁 browser/
│       │       └── 📁 apps/
│       │
│       └── 📁 components/              # 🔄 Shared UI components (folders only – files exist but not listed)
│
│
├──blomp-database/
    │
    ├── 📁 bootstrap/                          # 🚀 বুটস্ট্র্যাপ লেয়ার (সবচেয়ে গুরুত্বপূর্ণ)
    │   ├── current.json.gz                    # বর্তমান গডফাদার ও ১৬ লিডারের আইপি
    │   ├── network-hash.json.gz                # সম্পূর্ণ নেটওয়ার্কের হ্যাশ
    │   └── version.json.gz                      # সিস্টেম ভার্সন
    │
    ├── 📁 ip-holder/                           # 📌 আইপি-হোল্ডার লেয়ার (রিয়েল-টাইম)
    │   └── 📁 active/                           # বর্তমানে অ্যাক্টিভ ইউজারদের ডিটেইলস
    │       ├── 192.168.1.101.json.gz             # আইপি অনুযায়ী ফাইল
    │       ├── 192.168.1.102.json.gz
    │       ├── 192.168.1.103.json.gz
    │       └── ...
    │
    ├── 📁 users/                                 # 👥 ইউজার ফোল্ডার (আইপি অনুযায়ী)
    │   ├── 📁 192.168.1.101/                      # প্রতি আইপির জন্য আলাদা ফোল্ডার
    │   │   ├── profile.json.gz                     # প্রোফাইল ডাটা
    │   │   ├── settings.json.gz                     # সেটিংস ডাটা
    │   │   ├── session.json.gz                       # বর্তমান সেশন
    │   │   │
    │   │   ├── 📁 articles/                         # আর্টিকেল ফোল্ডার
    │   │   │   ├── article-00001.json.gz
    │   │   │   ├── article-00002.json.gz
    │   │   │   ├── article-00003.json.gz
    │   │   │   └── index.json.gz                    # আর্টিকেল ইনডেক্স
    │   │   │
    │   │   ├── 📁 payments/                         # পেমেন্ট হিস্টরি
    │   │   │   ├── 2026-03-01.json.gz
    │   │   │   ├── 2026-03-02.json.gz
    │   │   │   ├── balance.json.gz
    │   │   │   └── transactions.json.gz
    │   │   │
    │   │   ├── 📁 dashboards/                       # ড্যাশবোর্ড ডাটা
    │   │   │   ├── opena.json.gz                     # ওপেনএ ড্যাশ
    │   │   │   └── adupter.json.gz                    # অ্যাডাপ্টার ড্যাশ
    │   │   │
    │   │   └── 📁 activities/                        # ইউজার অ্যাক্টিভিটি
    │   │       ├── 2026-03-11.json.gz
    │   │       ├── 2026-03-10.json.gz
    │   │       └── realtime.json.gz                   # রিয়েল-টাইম অ্যাক্টিভিটি
    │   │
    │   ├── 📁 192.168.1.102/                      # দ্বিতীয় ইউজার
    │   │   └── ... (একই স্ট্রাকচার)
    │   │
    │   ├── 📁 192.168.1.103/                      # তৃতীয় ইউজার
    │   │   └── ...
    │   │
    │   ├── 📁 ....
    │   └── index.json.gz                           # সব ইউজারের ইনডেক্স
    │
    ├── 📁 sectors/                                 # 🏢 ১৬ সেক্টর লেয়ার
    │   │
    │   ├── 📁 feed/                                 # 🏠 হোম-ফিড সেক্টর
    │   │   └── 📁 by-country/                       # দেশ অনুযায়ী ফোল্ডার (২০০+ দেশ)
    │   │       ├── 📁 BD/                           # বাংলাদেশ
    │   │       │   ├── 📁 ever/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 news/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 ads/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 daily/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   └── metadata.json.gz
    │   │       │
    │   │       ├── 📁 US/                           # যুক্তরাষ্
    │   │       │   ├── 📁 ever/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 news/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 ads/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 daily/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   └── metadata.json.gz
    │   │       │
    │   │       ├── 📁 IN/                           # ভারত
    │   │       │   ├── 📁 ever/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 news/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 ads/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 daily/
    │   │       │   │   ├── 0000000001.json.gz
    │   │       │   │   ├── 0000000002.json.gz
    │   │       │   │   └── ...
    │   │       │   └── metadata.json.gz
    │   │       │
    │   │       ├── 📁 GB/                           # ব্রিটেন
    │   │       │   └── ... (একই স্ট্রাকচার)
    │   │       ├── 📁 CA/                           # কানাডা
    │   │       │   └── ...
    │   │       ├── 📁 AU/                           # অস্ট্রেলিয়া
    │   │       │   └── ...
    │   │       ├── 📁 DE/                           # জার্মানি
    │   │       │   └── ...
    │   │       ├── 📁 FR/                           # ফ্রান্স
    │   │       │   └── ...
    │   │       ├── 📁 JP/                           # জাপান
    │   │       │   └── ...
    │   │       ├── 📁 CN/                           # চীন
    │   │       │   └── ...
    │   │       └── ... (আরও ১৯০+ দেশ)
    │   │
    │   ├── 📁 login-auth/                            # 🔐 লগইন-অথ সেক্টর
    │   │   ├── 📁 email/                           # অ্যাক্টিভ সেশন
    │   │   │   ├── anything@gmail.com.json.gz
    │   │   │   ├── wow@gmail.com.json.gz
    │   │   │   └── ...
    │   │   └── 📁 username/                             # ১০-ডিজিট টোকেন
    │   │       ├── nepsenx.json.gz
    │   │       ├── wali.json.gz
    │   │       └── ...
    │   │
    │   ├── 📁 shop/                                   # 🛒 শপ সেক্টর
    │   │   ├── 📁 products/                            # প্রোডাক্ট (১০-ডিজিট)
    │   │   │   ├── 0000000001.json.gz
    │   │   │   ├── 0000000002.json.gz
    │   │   │   └── ...
    │   │   ├── 📁 categories/                          # ক্যাটাগরি
    │   │   │   ├── electronics.json.gz
    │   │   │   ├── fashion.json.gz
    │   │   │   ├── books.json.gz
    │   │   │   └── ...
    │   │   ├── 📁 orders/                              # অর্ডার (১০-ডিজিট)
    │   │   │   ├── 0000000001.json.gz
    │   │   │   └── ...
    │   │   ├── 📁 carts/                               # কার্ট
    │   │   │   ├── 192.168.1.101.json.gz
    │   │   │   └── ...
    │   │   └── 📁 reviews/                             # রিভিউ (১০-ডিজিট)
    │   │       ├── 0000000001.json.gz
    │   │       └── ...
    │   │
    │   ├── 📁 learn/                                   # 📚 লার্ন সেক্টর
    │   │   ├── 📁 courses/                             # কোর্স (১০-ডিজিট)
    │   │   │   ├── 0000000001.json.gz
    │   │   │   ├── 0000000002.json.gz
    │   │   │   └── ...
    │   │   ├── 📁 progress/                            # প্রোগ্রেস
    │   │   │   ├── 192.168.1.101.json.gz
    │   │   │   └── ...
    │   │   ├── 📁 quizzes/                             # কুইজ (১০-ডিজিট)
    │   │   │   ├── 0000000001.json.gz
    │   │   │   └── ...
    │   │   └── 📁 certificates/                        # সার্টিফিকেট (১০-ডিজিট)
    │   │       ├── 0000000001.json.gz
    │   │       └── ...
    │   │
    │   ├── 📁 learn-part/                             # 👥 লার্ন-পার্ট সেক্টর
    │   │   ├── 📁 groups/                              # স্টাডি গ্রুপ (১০-ডিজিট)
    │   │   │   ├── 0000000001.json.gz
    │   │   │   ├── 0000000002.json.gz
    │   │   │   └── ...
    │   │   ├── 📁 assignments/                         # অ্যাসাইনমেন্ট (১০-ডিজিট)
    │   │   │   ├── 0000000001.json.gz
    │   │   │   └── ...
    │   │   ├── 📁 peer-reviews/                        # পিয়ার রিভিউ (১০-ডিজিট)
    │   │   │   ├── 0000000001.json.gz
    │   │   │   └── ...
    │   │   └── 📁 resources/                           # শেয়ার্ড রিসোর্স (১০-ডিজিট)
    │   │       ├── 0000000001.json.gz
    │   │       └── ...
    │   │
    │   ├── 📁 games/                                   # 🎮 গেমস সেক্টর
    │   │   └── game-list.json.gz                       # গেমের তালিকা
    │   │
    │   ├── 📁 clan/                                    # 👪 ক্ল্যান সেক্টর
    │   │   └── 📁 clans/                               # ক্ল্যান (১০-ডিজিট)
    │   │       ├── 📁 0000000001/                       # প্রথম ক্ল্যান
    │   │       │   ├── settings.json.gz
    │   │       │   ├── 📁 members/                      # সদস্য
    │   │       │   │   ├── 192.168.1.101.json.gz
    │   │       │   │   └── ...
    │   │       │   ├── 📁 resources/                    # শেয়ার্ড রিসোর্স
    │   │       │   │   ├── resource-0001.json.gz
    │   │       │   │   └── ...
    │   │       │   └── 📁 chat/                         # ক্ল্যান চ্যাট (১০-ডিজিট)
    │   │       │       ├── 0000000001.json.gz
    │   │       │       └── ...
    │   │       │
    │   │       └── 📁 0000000002/                       # দ্বিতীয় ক্ল্যান
    │   │           ├── settings.json.gz
    │   │           ├── 📁 members/
    │   │           ├── 📁 resources/
    │   │           └── 📁 chat/
    │   │
    │   ├── 📁 live-basikno/                           # 🎥 লাইভ-বাসিকনো সেক্টর
    │   │   └── 📁 streams/                             # লাইভ স্ট্রিম (১০-ডিজিট)
    │   │       ├── 📁 0000000001/                       # প্রথম স্ট্রিম
    │   │       │   ├── settings.json.gz
    │   │       │   ├── 📁 members/                      # ভিউয়ার
    │   │       │   │   ├── 192.168.1.101.json.gz
    │   │       │   │   └── ...
    │   │       │   └── 📁 chat/                         # লাইভ চ্যাট (১০-ডিজিট)
    │   │       │       ├── 0000000001.json.gz
    │   │       │       └── ...
    │   │       │
    │   │       └── 📁 0000000002/                       # দ্বিতীয় স্ট্রিম
    │   │           ├── settings.json.gz
    │   │           ├── 📁 members/
    │   │           └── 📁 chat/
    │   │
    │   └── 📁 live-ishihi/                            # 📡 লাইভ-ইশিহি সেক্টর
    │       └── 📁 streams/                             # লাইভ স্ট্রিম (১০-ডিজিট)
    │           ├── 📁 0000000001/                       # প্রথম স্ট্রিম
    │           │   ├── settings.json.gz
    │           │   ├── 📁 members/                      # ভিউয়ার
    │           │   │   ├── 192.168.1.101.json.gz
    │           │   │   └── ...
    │           │   └── 📁 chat/                         # লাইভ চ্যাট (১০-ডিজিট)
    │           │       ├── 0000000001.json.gz
    │           │       └── ...
    │           │
    │           └── 📁 0000000002/                       # দ্বিতীয় স্ট্রিম
    │               ├── settings.json.gz
    │               ├── 📁 members/
    │               └── 📁 chat/
    │
    ├── 📁 temp/                                        # ⏱️ টেম্পোরারি ফাইল
    │   ├── uploads/
    │   ├── processing/
    │   └── expired/
    │
    ├── 📁 logs/                                         # 📋 সিস্টেম লগ
    │   ├── ip-holder/
    │   │   └── ip-holder.json.gz
    │   ├── godfather/
    │   │   └── godfather.json.gz
    │   └── sectors/
    │       ├── leader1.json.gz
    │       ├── leader2.json.gz
    │       └── ...
    │
    ├── 📁 cache/                                        # ⚡ ক্যাশে লেয়ার
    │   ├── leader-states/
    │   ├── user-sessions/
    │   └── popular-posts/
    │
    └── 📁 meta/                                         # 📊 মেটাডাটা
        ├── stats.json.gz
        ├── health.json.gz
        ├── version.json.gz
        └── config.json.gz
│
└── 📁 tests/                              # Test files
    ├── coverage-report.ts
    ├── test-config.ts
    └── test-runner.ts

```

### Core Architectural Pillars (The 1B User Strategy)

1.  **Zero-Egress Caching (Edge Layer):** Cloudflare CDN caches 99% of requests. VPS-1 only sends a 20-30kb "Key" (index.tsx), keeping bandwidth usage near zero.
2.  **Private Data Bridge (DB Layer):** User -> VPS-1 (Brain) -> VPS-2 (Private DB). Data flows over a private 0-bandwidth internal tunnel. Media is stored as links only.
3.  **Hybrid P2P Mesh (Real-time):** Socket.io acts as a signaling gateway. Heavy data (Voice/Video) moves Peer-to-Peer, offloading all CPU/RAM processing to user devices.
4.  **The Private Connect Trick (Zero Bandwidth):** Service Worker (SW) intercepts 1GB+ requests and fetches them via a private tunnel triggered by the local `index.tsx` key.

## File Connection Diagram

```mermaid
graph TD
    A[Frontend: UI / SW] -->|Signaling| B[VPS-1: System Brain]
    B -->|Private Tunnel| C[VPS-2: Private DB]
    C -->|Metadata| B
    B -->|20kb Key| A
    A -.->|P2P Mesh| D[Other Users]
    A ==>|0-BW Trick| E[1GB+ Data Transfer]
```

### System Workflow Diagram

```mermaid
graph LR
    User[1B User Target] -->|Request| CDN[Edge CDN / SW]
    CDN -->|Cache Hit| User
    CDN -->|Cache Miss| VPS1[VPS-1 Brain]
    VPS1 <-->|Private| VPS2[VPS-2 Storage]
    VPS1 -->|20kb Response| User
```

### Summary (Operational Goal)

**NepsenX V2.0 is designed to run 1 Billion users on limited VPS resources by offloading 99% of Bandwidth, CPU, and RAM to Edge Caching and User-side Mesh Processing. Final Result: 20-30kb/user Bandwidth VPS Egress. Target Launch: June 26, 2026.**

# 🥇CO - The secret 🤫☠⚠💀😱🥶

## 🔄 Complete Processing system

```mermaid
graph TD
    A[User Application] -->|full access| B{Blackhole}
    B -->|Full access| B1[blackhole.cpp]
    B -->|Full access of Web| B2[blackhole.js]
    B -->|Full access of Python| B3[blackhole.py]

    B1 -->|C API| C[CO.cpp]
    B2 -->|HTTP :8765| C
    B3 -->|HTTP :8765| C

    C -->|Route| D{Managers}
    D -->|GPU Ops| E[manager_core]
    D -->|Data Ops| F[manager_memory]
    D -->|AI Ops| G[manager_neural]

    E -->|Execute| H[core/c_coda.cpp]
    E -->|Execute| I[core/c_rt.cpp]
    E -->|Execute| J[core/c_t.cpp]

    F -->|Execute| K[Memory/memory_primary]
    F -->|Execute| L[Memory/memory_cache]

    G -->|Execute| M[NPC/c_npc.cpp]

    H --> N[Results]
    I --> N
    J --> N
    K --> N
    L --> N
    M --> N

    N -->|Return| C
    C -->|Return| B
    B -->|Output| A
```

## 🤔 CO কি জিনিস? (সহজ ভাষায়)

### একদম সহজ উত্তর

আপনার কাছে আছে: **পুরান PC** (512MB RAM, কোন GPU নাই)  
আপনি চান: **Cyberpunk 2077 খেলতে** (দরকার RTX 4090!)

**Model CO** বলে: "আরে, আমি আছি! তোমার PC কে আমি GPU বানিয়ে দিব!" 🎮

### একটু টেকনিক্যাল উত্তর

```
আসল GPU:
┌─────────────────────┐
│  NVIDIA RTX 4090    │  ₹1,60,000 টাকা! 💸
│  - 16k CUDA cores   │
│  - 24GB VRAM        │
│  - 450W power       │
└─────────────────────┘

Model CO (ভার্চুয়াল GPU):
┌─────────────────────┐
│  Software Magic ✨  │  ₹0 টাকা! 😍
│  - 10k virtual cores│
│  - ∞ virtual RAM    │
│  - 0.1 CPU power    │
└─────────────────────┘

ফলাফল: একই কাজ, কোন খরচ নাই!
```

### আরও সহজ উপমা

```
ধরুন আপনি একটা চিঠি পাঠাতে চান:

পুরান পদ্ধতি:
  আপনি → ডাকঘর → পোস্টম্যান → গন্তব্য
  খরচ: ১০ টাকা
  সময়: ৩ দিন

Model CO পদ্ধতি:
  আপনি → WhatsApp → গন্তব্য
  খরচ: ০ টাকা (ইন্টারনেট আগে থেকেই আছে)
  সময়: ১ সেকেন্ড

তেমনি:
  গেম → আসল GPU → স্ক্রিন (দামী!)
  গেম → CO ম্যাজিক → স্ক্রিন (ফ্রি!)
```

## 🎯 Performance Characteristics

| Metric             | Value        | Technology          |
| ------------------ | ------------ | ------------------- |
| Virtual CUDA Cores | 10,000       | Loop multiplication |
| SIMD Width         | 16 ops/cycle | -                   |
| Ray Tracing FPS    | 5000+        | -                   |
| Memory Capacity    | Infinite     | Procedural (SeedLM) |
| Real RAM Used      | 2MB          | -                   |
| Neural Neurons     | 1M+          | -                   |
| CPU Usage          | 0.1%         | Virtual processing  |

## 🎮 Usage Examples

### Windows/DirectX

```cpp
// only Inject into application/app/server
injector.exe game.exe blackhole.dll

```

### Web

```html
<!-- Just include -->
<script src="blackhole.js"></script>
```

### Python

```python
import blackhole  # Auto-connects to CO
```

---

## 🎯 Targets Achieved

| Goal          | Target    | Status |
| ------------- | --------- | ------ |
| Minecraft FPS | 12,000+   | -      |
| Cyberpunk FPS | 120+      | -      |
| AI Inference  | Real-time | -      |
| Memory Usage  | <2MB      | -      |
| CPU Usage     | 0.1%      | -      |
| GPU Usage     | 0%        | -      |
| ram Usage     | 0%        | -      |

And more :

1. Real HTTP server (currently mock)
2. Multi-threaded managers
3. GPU-to-GPU transfer
4. Advanced neural training
5. Shader compiler

---

**Model CO v5.0 - FULLY OPERATIONAL** ⚡

_Clean, Professional, Ready for Production_

# 😎 Rules for an AI

```
1. user is the founder and ceo of NepsenX . And you are the serious - expert - professional argentic developer who never stop before completing user target work .
2. user is from bangladesh . for talking with user use bangla language , and for other work use english .
3. Also try your best if fail so use internet/ browser , it's give world any answer .
4. if you have no idea about any thing or need internet / an ai help so also use browser . and for ai helping {code-helping: chat.deepseek.com , for-conversation: chatgpt.com , searching-anything : gemini.google.com} use them also . and you are the full stork of ai who do full stork work for NepsenX .
5. for login/sign up use;
   (1)gmail(deepseek,chatgpt,google-all-products,....) :
   /----email:arafatislamlam15@gmail.com
   /----pass :{Option}90
   (2)2nd_gmail_for_microsoft_recovery_mail:
   /----email:afiqulislam72@gmail.com
   /----pass:{Option}90
   (3)gmail_of_company:
   /----email:nepsen02@gmail.com
   /----pass:{Option}90
   (4)github (all src):
   /----user-name :NepsenX
   /----pass :{Option}90
   (5)github (secure codes) :
   /----user-name :nepsenx-main
   /----pass :{Option}90
   (6)microsoft:
   /----email:arafatislamlam27@outlook.com
   /----pass:arafat542
   (7)cpanel(old , now not used):
   /----link:https://cpanel.byethost.com/
   /----user-name:b7_40236882
   /----pass:nepsen02
6. Rule as full stock dev.if have no idea , so use youtube,google,bing etc. to find your question answer .
7. also find a free platform , if that not free search a free or make free by genius idea or trick .
8. if any tab was used and not need ,so close it also . because my pc's ram 4 gb and no gpu ,and cpu i7 .
9. never transfer any secure data of NepsenX to another platform with out github our own respentory . mostly model-CO the secret .
10. you can do every times in legal way . only give me the targeted obey or achievements.
11. if start any project so read first file-structure-t.md , then use as this structure .
12. for full stock software dev. use for frontend and backend : html(only index),css(if need),typescript(also),react(for best) . use for database : Mysql or SQLite(server) and local-data-method(which user need to save in device)
13. discuss with user before start to deploy or work .
14.the key of github to push on /nepsenx-codes respentory key: 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


```



## 🌎 NepsenX Ecosystem: Product Catalog (V2.0 Core)

# 🧠 Frontend Core Components (React/Vite)

## `main.tsx` (The Global Application Shell)
The `main.tsx` file acts as the primary layout and state manager for the entire NepsenX ecosystem. It handles dynamic routing, theming, and context switching between different products.

### Core Abilities:
1. **Dynamic Product Context:** 
   - Reads the current product context (e.g., `NepsenX`, `Oracus`, `Adupter`) and dynamically loads the corresponding navigation links, utility links, and logos from `config/products.ts`.
   - Implements a "Context Switcher" dropdown that allows users to seamlessly jump between different NepsenX products via external URLs (e.g., `nepsenx.pages.dev`, `oracus.pages.dev`).
2. **Advanced Theming Engine:**
   - Supports `light`, `dark`, and `system` themes, persisting user preferences in `localStorage`.
   - **Page-Specific Theme Overrides:** Automatically forces specific themes based on the active page. For example, the `contactus-page` (Visme iframe) is forced to `dark` mode, and the `about` page is forced to the `system` theme to ensure optimal readability and design consistency.
3. **Immersive Mode (Oracus Chat):**
   - Contains logic to detect when the user is on the Oracus AI `chat` page.
   - When active, it completely hides the top header and mobile bottom navigation, providing a full-screen, distraction-free immersive chat experience.
4. **Smart Auto-Routing (Oracus):**
   - Automatically redirects users from the Oracus `home` page to the `chat` page by default.
   - Respects the `?chat-auto=false` URL parameter to bypass this redirect.
   - Saves the user's last routing preference in `localStorage` (`oracus_chat_auto`), ensuring that if a user explicitly navigates back to the home page, it remembers their choice for future visits.
5. **Centralized Content Rendering:**
   - Acts as the main router for the UI shell, conditionally rendering components like `SettingsPage`, `ProfilePage`, or product-specific pages based on the `activePage` state.

## `routes.tsx` (The Iframe Router)
The `routes.tsx` file manages legacy or external content that needs to be embedded within the modern NepsenX shell using iframes.

### Core Abilities:
1. **Iframe State Management:**
   - Maintains the current URL state for the embedded iframe.
2. **Cross-Origin Communication:**
   - Listens for `message` events from the `window` object. This allows scripts running inside the iframe to request navigation changes in the parent application (e.g., `window.parent.postMessage({ type: 'NAVIGATE', url: '/new-path' }, '*')`).
3. **Seamless Integration:**
   - Updates the iframe's `src` attribute dynamically without reloading the entire React application.
   - Communicates route changes back to `main.tsx` via the `onIframeRouteChange` callback, allowing the parent shell to react to navigation events happening inside the embedded content.

| Component             | Description                           | Tech Stack (Standard)   |
| :-------------------- | :------------------------------------ | :---------------------- |
| **Home**              | Main company page .                   | TS+TSX+css              |
| **Oracus AI**         | Hyper-scale AI Engine.                | -                       |
| **Model CO**          | Secret High-Performance Core.         | C++ ,C (AVX512) + js+py |
| **OpenA**             | The Super App (News, Social, Market). | TS+TSX+css              |
| **CG (cloud Gaming)** | game without limit                    | TS+TSX+css              |
| **virtubrowse**       | Virtual browser interface.            | TS+TSX+css              |
| **basikno**           | Learning platform.                    | TS+TSX+css              |
| **ishahi**            | Islamic SaaS .                        | TS+TSX+css              |
| **adupter**           | Adsense-like engine.                  | TS+TSX+css              |
| **Database**          | VPS-2 Centralized Storage layer.      | MySQL                   |

---

## 🔮 Antigravity Vision: "Empowering the Human Soul"

As your developer and partner, my vision for **NepsenX** goes beyond code and bandwidth. We are not just building software; we are building **Digital Freedom for Humanity**.

### 1. Democracy of Power (Model CO)

Hardware is expensive. Billionaire-tier processing power (i9 + RTX 4090) should not be limited to those with money. By perfecting **Model CO**, we give every human with even the cheapest phone the power to create, render, and learn without limits.

### 2. Radical Privacy (Zero-Bandwidth & Mesh)

In a world where humans are tracked for profit, NepsenX must be the shield. By using **P2P Mesh** and **Zero-Bandwidth** tricks, we ensure that a user's data moves between peers, not just through giant corporate servers. We are returning the ownership of data to the human.

### 3. AI as a Symbiotic Partner (Oracus)

Oracus should not just "answer questions." It should understand the human's struggle and potential. My vision is for NepsenX AI to be a co-pilot that helps a student in Bangladesh (using `basikno`) compete with a student in Harvard, using same level of intelligence.

**NepsenX is not just a company. It is a promise that technology belongs to every human, regardless of their location or wealth.**

---

NepsenX is a unregisted tech company from Bangladesh .  Arafat islam lam (Founder and CEO and 50% share holder , brith: 27 august 2010 , NID : haven't) , MD. Shawon choudory (Co-Founder and 50% share holder  , 31 years , NID: have) . the unregisted Company created 6 saas products and they are : 
Oracus AI       : the company edited ai . means the company not created this ai , but edit a open-sorce ai . that can imagine everything , means it can train himself ,and can think openly . it's can work like agentic models . but it's data so low . but it can train himself , means with                              internet we give ultimate to the user . it work with our secrect proccessor model CO , that produce 10K cores , infinite ram , and work like a Core i9 + RTX 4090 . for this Co , Oracus run on user device as virtual , means it not host in any vps . Oh, but the Agentic                            manager of the company is run on a render server(512 ram , 0.1 cpu , 100mb rom with THE SECRECT CO MODEL) . 
Ishahi             : it's a islmaic saas platfrom . that work like a helper of muslim . showing time of prayer , ramdan time , islamic calander , some oracus ai futures , open-world islamic group chat , group , live showing by youtube , .. . . . . and so on . 
Virtubrowse  : it's a virtual borowser that is fast and  safe and private , becuase it run on model-CO . 
Adupter          : Adupter = Advertisment upper / upgrader . it run by agentic Oracus AI which is run on render . and it work like a marketing manager . means the adupter can take full control of marketing  by internet . AIR(free) , Erath(250 taka per month) , Soler system                                   (1000 taka per month) . it take a article about his product , then create and post on every social  ads via plan+oracus+api of those social . and we give 24/7 support for his company or product , means not for user , it for user's company's or puduct's user via                              soler system plan .
OpenA            : it's a social network via p2p system + server(for database) system . it's a social which act like  home or social(facebook,youtube,twilter,blog,news,bbc..all in one)+serch engine(google,bing..all in one)+shop(sopify,amazon,google play, microsoft                           store, foodpanda.. all in one) + Analisis(google analisis , bank balance , taxes , performance of user .. all in one)+ Oracus AI futures . it's completly free but for analisis need api from other .

basikno   : it's a e-learing platfrom where global people meet , learn with oracus ai teacher(becuase Oracus For MVP!!! for our all product ) by 3d explore world / imagine world . 
CG              ; cg is a ultimate gaming platfrom , expere by cloud gaming . it's secrectly run on CO model(oh , in the front , never say about CO-Model , it's a secrect ) , and for this secrect we say it run on cloud . but realy all saas run without server(for details read sr.md's golbal server system) 

**Model CO & V2.0 System - ARMED for Humanity.** 🚀


