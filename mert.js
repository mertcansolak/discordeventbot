const {
  Client,
  GatewayIntentBits,
  MessageAttachment,
  Message,
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const prefix = "!";

const etkinlikler = [
  {
    ad: "Nürburgring 24 Saat - Etkinlik",
    tarih: new Date(2023, 4, 16, 23, 48),
    aciklama:
      "Nürburgring 24 Saat'e sayılı günler kaldı! Bu bot seansları size bildirim olarak aktaracak :relaxed: ",
  },
  {
    ad: "Nürburgring 24 Saat - Sıralama 1",
    tarih: new Date(2023, 4, 18, 14, 15),
    aciklama:
      "NBR24H Sıralama 1 seansı başladı! https://www.24h-rennen.de/en/live-en/ adresinden takip edebilirsiniz!",
  },
  {
    ad: "Nürburgring 24 Saat - Sıralama 2",
    tarih: new Date(2023, 4, 18, 21, 0),
    aciklama:
      "NBR24H Sıralama 2 seansı başladı! https://www.24h-rennen.de/en/live-en/ adresinden takip edebilirsiniz!",
  },
  {
    ad: "Nürburgring 24 Saat - Sıralama 3",
    tarih: new Date(2023, 4, 19, 14, 30),
    aciklama:
      "NBR24H Sıralama 1 seansı başladı! https://www.24h-rennen.de/en/live-en/ adresinden takip edebilirsiniz!",
  },
  {
    ad: "Nürburgring 24 Saat - Top Sıralama",
    tarih: new Date(2023, 4, 19, 18, 30),
    aciklama:
      "NBR24H Top Sıralama seansı başladı! https://www.24h-rennen.de/en/live-en/ adresinden takip edebilirsiniz!",
  },
  {
    ad: "Nürburgring 24 Saat",
    tarih: new Date(2023, 4, 20, 15, 50),
    aciklama:
      "Nürburgring 24 saat yarışı başlamak üzere https://www.24h-rennen.de/en /live-en/ adresinden takip edebilirsiniz!",
  },
  // Diğer etkinlikleri buraya ekleyin
];

client.on("messageCreate", (message) => {
  if (message.channel.id === "1099599631790374934") {
    if (message.content === `${prefix}lineup`) {
      message.reply("C.Engelhart, A.Güven, L.Heinrich ve L.Vanthoor!");
    }
    if (message.content === `${prefix}car`) {
      message.reply("#54 numaralı Pirelli Motorsport aracında yarışacağım");
    }
    if (message.content === `${prefix}yayın`) {
      message.reply(
        "https://www.24h-rennen.de/en/live-en/ adresinden takip edebilirsin"
      );
    }
    if (message.content === `${prefix}program`) {
      message.reply(
        "Perşembe:\n14:15 - Sıralama 1\n21:00 - Sıralama 2\nCuma:\n14:30 - Sıralama 3\n18:30 - Top Qualifying\nCumartesi:\n16:00 - 24H Yarış"
      );
    }
    if (message.content.startsWith("!livery")) {
      message.reply(
        "İşte kullanacağımız livery: https://i.imgyukle.com/img/2023/05/15/rnK0Ap.jpeg"
      );
    }
  }
  if (message.content === `${prefix}twitter`) {
    message.reply("https://twitter.com/AyhancanGuven");
  }
  if (message.content === `${prefix}instagram`) {
    message.reply("https://www.instagram.com/ayhancanguven/");
  }
});

client.on("ready", () => {
  const currentTime = new Date();

  for (const etkinlik of etkinlikler) {
    const targetTime = etkinlik.tarih;
    const timeUntilTarget = targetTime.getTime() - currentTime.getTime();
    if (timeUntilTarget > 0) {
      setTimeout(() => {
        const channel = client.channels.cache.get("1099599631790374934"); // Kanal ID'sini buraya girin
        if (channel) {
          channel.send(`${etkinlik.aciklama}`);
        }
      }, timeUntilTarget);
    }
  }
});

client.login(
  "MTEwODA3Nzk3MjgzNTAyMDkyMA.G_ujX6.Y0xaq3wAr9yxJVS-G0Et7TBbd1k_tvLA-xGGRY"
);
