const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzcxNDAyNDE4NjU5MjYyNTA0.X5rmfA.sBtMbixZH0M_4Iljd_cfZ6UiI3w';
const byeChannelName = "goodbye-friend";
const welcomeChannelComment = "어서오세요.^-^";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'doomsday best cheat shop!!!' }, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "손님"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == 'colla') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#F7FE2E')
      .setTitle('Colla')
      .setDescription('Support OS : Windows 10 (all version)\n Support CPU : Intel, AMD\n Support Screen : Windowed, Borderless\n  Anticheat : BE, EAC Bypass')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField("\:sparkling_heart:\플레이어 ESP\n",'\`-플레이어 ESP 활성화\n-봇 ESP 활성화\n-오프라인 플레이어\n-2D BOX\n-체력바\n-닉네임\n-거리\n-소유 무기\n-ESP 거리수정 (0~400)\`')
      .addField('\u200b', '\u200b')
      .addField("\:sparkling_heart:\기타 ESP\n",'\`-나무상자\n-드랍 아이템\n-도구함(건차)\n-터렛\n-자원(천,열매 등)\n-헬리콥터\n-광석\n-작은 주머니\n-방사능 수집품\n-에어드랍 ESP Active\n\`')
      .addField('\u200b', '\u200b')
      .addField("\:sparkling_heart:\AIMBOT - Default Bone Head",'\`-에임봇\n-유도탄 에임봇\n-에임봇 부위설정 [머리,목,몸]\n-에임봇 팀 제외\n-Aimbot FOV\n-에임봇 조준 스피드\n-에임봇 거리수정 (0~400)\`')
      .addField('\u200b', '\u200b')
      .addField("\:sparkling_heart:\MISC",'\`-FOV 범위 표시\n-크로스 헤어 표시\n-스파이더맨\n-스킨체인저\n-자유건축(On key r when with the construction plan)\n-항상아침\n-안티에임\n-디버그카메라\n-무반동\n-흔들림 없음\n-수영모션\n-긴목추가(시야범위 향상)\n-슈퍼 에오카\n-슈퍼 밀리\`')
      .addField('\u200b', '\u200b')
      .addField("\:sparkling_heart:\COLORS",'\`-Full Player ESP Color Modification\n-Full Bot ESP Color Modification\n-Full Resource Color Modification\n-Full Misc Draw Color Modification\`')

    message.channel.send(embed)
  } 

  if(message.content == 'colla sell') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#F7FE2E')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField('\:credit_card:\ KR Price', '1일 : 12,000 KR\n 7일 : 40,000 KR\n 30일 : 80,000 KR\n 무제한 : Hazard DM')
      .setTitle('Paypal / 카드결제')
      .setURL('https://sellix.io/doomsdays/category/5f8879ab06b4f')

    message.channel.send(embed)
  } 

  if(message.content == 'colla com') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#F7FE2E')
      .setAuthor('Hazard', img)
      .setDescription('\`-최대 5개월 감지된 적 없음\n-HWID 하드 인증\n-런처 자동 업데이트\n-주기적인 업데이트로 인한 기능 변경\`')

    message.channel.send(embed)
  } 

  if(message.content == 'gal') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#E217EE')
      .setTitle('Product Name : gal')
      .setDescription('Support OS : Windows 10 pro 1903, 1909, 2004\n Support CPU : Intel, AMD\n Support Screen : Windowed')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField('Player ESP',`-Player ESP Active
      -Player ESP Distance
      -Show Sleepers
      -Show Player Halth
      -Show Player Box
      -Show player name
      -Show player Weapon
      -Bot ESP Active
      -Bot ESP Distance
      -Show Bot Health
      -Show Bot Name
      -Show Bot Weapon`)
      .addField('ESP', `-Objects ESP
      -Objects Distance
      -Item Show Name
      -Item Show Distance`) 
      .addField('MISC',`-Recoil Control
      -Spiderman
      -DebugCamera`)
      .addField('AIMBOT',`-Aimbot Active
      -Aimbot FOV
      -Aimbot Distance
      -Aimbot Smooth`)

      message.channel.send(embed)
  }

  if(message.content == 'gal sell') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#E217EE')
      .setTitle('gal buy Click!')
      .setURL('https://sellix.io/doomsdays/category/5f8879ab06b4f')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField('KR Price', '1일 :7,000 KR\n 7일 : 25,000 KR\n 30일 : 55,000 KR\n 무제한 : Hazard DM')
      .addField('\u200b', '\u200b')
      .addField('USD Price', 'One Day : 6.13 USD\n One Week : 21.86 USD\n One Month : 48.10 USD\n Lifetime : HaZard DM')

    message.channel.send(embed)
  } 

  if(message.content == 'rad sell') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#F7FE2E')
      .setTitle('Paypal / 카드결제')
      .setURL('https://sellix.io/doomsdays/category/5f8879ab06b4f')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField('\:credit_card:\스푸퍼 X KR Price', '1일 :5,500 KR\n 7일 : 15,000 KR\n 30일 : 30,000 KR')
      .addField('\u200b', '\u200b')
      .addField('\:credit_card:\스푸퍼 O KR Price', '1일 :7,500 KR\n 7일 : 20,000 KR\n 30일 : 40,000 KR')
      
    message.channel.send(embed)
  } 

  if(message.content == 'rad') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#F7FE2E')
      .setTitle('Product Name : rad')
      .setDescription('Support OS : Windows 10 all version\n Support CPU : Intel, AMD\n Support Screen : Windowed')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField("\:sparkling_heart:\기능",'\`-플레이어 ESP\n-반동 제어(무반동)\n-자유시점 카메라\n-동물 ESP\n-바이패스 우회\n-프레임 드랍 제거\`')

      message.channel.send(embed)
  }

  if(message.content == 'rad com') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#F7FE2E')
      .setAuthor('Hazard', img)
      .setDescription('\`-가성비 ESP 치트\n-ID/PW 로그인 인증\n-HWID 인증\n-USB 드라이브 필요\`')

    message.channel.send(embed)
  } 

  if(message.content == 'account') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#F7FE2E')
      .setTitle('Rust Account Info')
      .addField('\u200b', '\u200b')
      .addField('New account','-13,000 KR')
      .addField('Play account','-15,000 KR~\n\nPlay account 계정은 플레이 타임이 있는 계정입니다.\n 티켓을 통해 따로 문의주세요.')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      message.channel.send(embed)
  }

  if(message.content == 'luna spoofer') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('Product : Luna Spoofer')
      .setDescription('Support OS : Windows 7, Windows 10 (all version)\n Support CPU : Intel, AMD\n EAC/BE Bypass')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField("\:sparkling_heart:\기능\n",'\`-하드디스크 스푸핑\n -CPU 스푸핑\n -메인보드 스푸핑\n -폴더 클리너\n -1초 스푸핑\n\`')

    message.channel.send(embed)
  } 

  if(message.content == 'luna sell') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('Paypal / 카드결제')
      .setURL('https://sellix.io/doomsdays/category/5f93eddb5ede6')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField('\:credit_card:\KR Price', '30일 : 30,000 KR')

    message.channel.send(embed)
  } 

  if(message.content == 'luna com') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setAuthor('Hazard', img)
      .setDescription('\`-런처 자동 업데이트\n-ID/PW 로그인 인증\n-HWID 하드 인증\n-출시 이후 감지된 적 없음\n-정기적인 업데이트를 위해 1달의 기간만 판매\`')

    message.channel.send(embed)
  } 

  if(message.content == 'full') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('Full (ESP+AIMBOT)')
      .setDescription('Support OS : Windows 10 all version\n Support CPU : Intel, AMD\n USB Drive 필요')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\플레이어 ESP','\`-2D BOX\n-스켈레톤\n-체력바\n-거리\n-헤드 조준 위치 표시\n-라인\-ESP 거리조절\`')
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\Aimbot','\`-반동제어(+호흡보정)\n-예측사격\n-에임봇 조준 위치(머리/몸통)\n-에임봇 범위 지정\n-에임봇 속도 조정\n-Aimbot Fov\`')
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\아이템 ESP','\`-가방\n-헬멧\n-방어구\n-총알\n-의료품\n-드링크\n-배율\n\-ESP 거리조절\`')

      message.channel.send(embed)
  }

  if(message.content == 'full sell') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('Paypal / 카드결제')
      .addField('\u200b', '\u200b')
      .setURL('https://sellix.io/doomsdays/category/5f949ef3805e8')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\:credit_card:\ KR Price', '1일 : 7,500 KR\n 3일: 16,000 KR\n 7일 : 34,000 KR')

    message.channel.send(embed)
  } 

  if(message.content == 'full com') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setAuthor('Hazard', img)
      .setDescription('\`-가성비 ESP 치트\n-ID/PW 로그인 인증\n-HWID 하드 인증\n-런처 자동 업데이트\`')

    message.channel.send(embed)
  } 

  if(message.content == 'full esp') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('Full ESP')
      .setDescription('- Support OS : Windows 10 1803~2004\n- Support CPU : Intel, AMD\n- USB Drive 필요')
      .setAuthor('Hazard', img)
      embed.setThumbnail(img2)
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\플레이어 ESP','\`-2D BOX\n-스켈레톤\n-체력바\n-거리\n-헤드 위치\n-라인\n-ESP 거리조절\`')
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\아이템 ESP','\`-가방\n-헬멧\n-방어구\n-총알\n-의료품\n-드링크\n-배율\n\-ESP 거리조절\`')
      
      message.channel.send(embed)
  }


  if(message.content == 'full esp sell') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('Paypal / 카드결제')
      .addField('\u200b', '\u200b')
      .addField('\:credit_card: \ KR Price', '- 1일 : 6,000 KR\n- 7일: 20,000 KR')
      .setURL('https://sellix.io/doomsdays/category/5f949ef3805e8')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      
    message.channel.send(embed)
  } 

  if(message.content == 'full esp com') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setAuthor('Hazard', img)
      .setDescription('\`-가성비 ESP 치트\n-ID/PW 로그인 인증\n-HWID 하드 인증\n-런처 자동 업데이트\`')

    message.channel.send(embed)
  } 

  if(message.content == 'JPAK') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('JPAK')
      .setDescription('Support OS : Windows 10 all version\n Support CPU : Intel, AMD\n Support Screen : 전체화면 창모드, 창모드\n Server : Steam, Kakao')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\색상','\`-몸\n-옷,헬멧,가방(T1,T2,T3)\n-낙하산\n-차량\n-건물\n-지형\`')
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\지역','\`-사운드 제거\n-잔디 제거\n-잔디 제거(10M 제외)\n-맵 모자이크\`')
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\무기','\`-반동 제어(0~100%)\n-조준시 흔들림 제거\n-데미지 증가\`')
      .addField('\u200b', '\u200b')
      embed.addField('\:sparkling_heart:\기타','\`-1인칭 모드 3인칭 지원\n-근접무기 길이증가\n-근접무기 색상변경\n-슈퍼 점프\n-문 통과\n-벽 너머 적 확인\`')

      message.channel.send(embed)
  }

  if(message.content == 'JPAK sell') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('Paypal / 카드결제')
      .setURL('https://sellix.io/doomsdays/category/5f949ef3805e8')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField('\:credit_card:\ KR Price', '7일 : 15,000 KR\n 30일: 35,000 KR')

    message.channel.send(embed)
  } 

  if(message.content == 'jpak com') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setAuthor('Hazard', img)
      .setDescription('\`-가성비 PAK\n-ID/PW 로그인 인증\n-HWID 하드 인증\n-사용자 커스텀\`')

    message.channel.send(embed)
  } 

  if(message.content == 'pubg script sell') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setTitle('Paypal / 카드결제')
      .setURL('https://sellix.io/doomsdays/category/5f949ef3805e8')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField('\:credit_card:\ KR Price', 'Lifetime : 55,000 KR')

    message.channel.send(embed)
  } 

  if(message.content == 'pubg script') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('01E9FE')
      .setTitle('Script VERP')
      .setDescription('Support OS : Windows 7, 8, 10 all version\n Support CPU : Intel, AMD\n Server : Steam, Kakao\n Support AntiCheat : BE, XC, Xenuine')
      .setAuthor('Hazard', img)
      .setThumbnail(img2)
      .addField('\u200b', '\u200b')
      .addField('\:sparkling_heart:\기능','\`-반동제어(X,Y 축)\n-빠른발사(속도조절 가능)\n-스코프 반동제어\n-오버레이 지원\n-자동 업데이트\n-사용자 커스텀\`')

      message.channel.send(embed)
  }

  if(message.content == 'verp com') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#01FBFB')
      .setAuthor('Hazard', img)
      .setDescription('\`-뛰어난 반동제어\n-보안 우수\n-ID/PW 로그인 인증\n-HWID 하드 인증\n-주기적인 자동 업데이트`')

    message.channel.send(embed)
  } 

  if(message.content == '1') {
    if(checkPermission(message)) return
    let img = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let img2 = 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif';
    let embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('사용자 구매 동의서')
      .setDescription(`① 프로그램 사용시 생기는 모든 문제는 구매자가 감수합니다.
      ② 입금할 계좌번호/본인 이름/입금 금액을 적어주세요.
      ③ 정보기입 후 356-1067-4434-93 농협으로 송금 부탁드립니다.`)
      .setAuthor('Hazard', img)
      .setThumbnail(img2)

      message.channel.send(embed)
  }

  else if(message.content == '414241241') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#e1aecd')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

client.on('message', (message) => {
if(message.content.startsWith('!청소')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});



function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);