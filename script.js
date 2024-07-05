const jadwalContainer = document.getElementById("jadwal");
const prevDayBtn = document.getElementById("prevDay");
const nextDayBtn = document.getElementById("nextDay");

const daftarHari = [
  {
    hari: "Senin",
    judul: "Senin Push Day (Chest, Shoulder, Tricep):",
    latihan: [
      {
        nama: "Incline Dumbbell Press",
        reps: "12 reps x 4 Sets",
        gambar:
          "https://hips.hearstapps.com/hmg-prod/images/workouts/2017/04/inclinedumbbellbenchpress-1492108229.gif?resize=640:*",
      },
      {
        nama: "Flat Bench Press",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://barbend.com/wp-content/uploads/2022/03/dumbbell-bench-press-barbend-movement-gif-masters.gif",
      },
      {
        nama: "Pec Deck Fly",
        reps: "12 Reps x 4 Sets",
        gambar: "https://i.makeagif.com/media/5-26-2015/IGvTK2.gif",
      },
      {
        nama: "Shoulder Press",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://media1.tenor.com/m/T_vqvD5qG-YAAAAC/shoulder-press-seated-shoulder-press.gif",
      },
      {
        nama: "Dumbbell Lateral Raise",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/12/Dumbbell-Lateral-Raise.gif?fit=600%2C600&ssl=1",
      },
      {
        nama: "Cable Tricep Pushdown",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://blog.squatwolf.com/wp-content/uploads/2021/05/ezgif.com-gif-maker-1.gif",
      },
      {
        nama: "Cable Overhead Tricep Extension",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/04/cable-rope-overhead-triceps-extension.gif",
      },
    ],
  },
  {
    hari: "Selasa",
    judul: "Selasa Pull Day (Back, Rear Delt, Bicep):",
    latihan: [
      {
        nama: "Lat Pulldown",
        reps: "12 reps x 4 Sets",
        gambar:
          "https://vidafitness.com.au/wp-content/uploads/2020/03/58-3498309-Lat-Pulldown-GIF-26427b91730d4039a39d557e21c9e494.gif",
      },
      {
        nama: "Barbell Row",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://hips.hearstapps.com/hmg-prod/images/workouts/2017/04/barbellrow-1491916911.gif",
      },
      {
        nama: "Cable Row",
        reps: "12 Reps x 4 Sets",
        gambar: "https://i.makeagif.com/media/4-28-2015/ibwPMp.gif",
      },
      {
        nama: "Cable Face Pull Full",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i0.wp.com/b-reddy.org/wp-content/uploads/2016/02/facepull-gif.gif?fit=360%2C202&ssl=1",
      },
      {
        nama: "Bicep Curl",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif",
      },
      {
        nama: "Hammer Curl",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://barbend.com/wp-content/uploads/2021/08/hammer-curl-barbend-movement-gif-masters.gif",
      },
    ],
  },
  {
    hari: "Rabu",
    judul: "Rabu Leg Day (Kaki, Bets):",
    latihan: [
      {
        nama: "Barbell Squat (12 reps x 4 Sets)",
        reps: "12 reps x 4 Sets",
        gambar:
          "https://balancefitness.com/wp-content/uploads/2019/08/BB-Squat-GIf.gif",
      },
      {
        nama: "Leg Press (12 Reps x 4 Sets)",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i.pinimg.com/originals/e6/02/3e/e6023e84b12cac6c7baf46112c7efc31.gif",
      },
      {
        nama: "Lunges (12 Reps x 4 Sets)",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://cdn.jefit.com/assets/img/exercises/gifs/136.gif",
      },
      {
        nama: "Leg Etension",
        reps: "12 Reps x 4 Sets",
        gambar: "https://i.makeagif.com/media/12-04-2017/TWbaFn.gif",
      },
      {
        nama: "Hamstring Curl",
        reps: "12 Reps x 4 Sets",
        gambar: "https://i.makeagif.com/media/2-27-2017/lUq_2W.gif",
      },
      {
        nama: "Calve Raise",
        reps: "12 Reps x 4 Sets",
        gambar: "https://i.makeagif.com/media/5-01-2015/XDYrlP.gif",
      },
    ],
  },
  {
    hari: "Kamis",
    judul: "Kamis Pull Day (Back, Rear Delt, Bicep):",
    latihan: [
      {
        nama: "Lat Pulldown",
        reps: "12 reps x 4 Sets",
        gambar:
          "https://vidafitness.com.au/wp-content/uploads/2020/03/58-3498309-Lat-Pulldown-GIF-26427b91730d4039a39d557e21c9e494.gif",
      },
      {
        nama: "Barbell Row",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://hips.hearstapps.com/hmg-prod/images/workouts/2017/04/barbellrow-1491916911.gif",
      },
      {
        nama: "Cable Row",
        reps: "12 Reps x 4 Sets",
        gambar: "https://i.makeagif.com/media/4-28-2015/ibwPMp.gif",
      },
      {
        nama: "Cable Face Pull Full",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i0.wp.com/b-reddy.org/wp-content/uploads/2016/02/facepull-gif.gif?fit=360%2C202&ssl=1",
      },
      {
        nama: "Bicep Curl",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif",
      },
      {
        nama: "Hammer Curl",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://barbend.com/wp-content/uploads/2021/08/hammer-curl-barbend-movement-gif-masters.gif",
      },
    ],
  },
  {
    hari: "Jumat",
    judul: "Jumat Upper Body (Chest,Back, Shoulder, Tricep, Bicep):",
    latihan: [
      {
        nama: "Incline bench press",
        reps: "12 reps x 4 Sets",
        gambar:
          "https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/Incline-Bench-Press.gif",
      },
      {
        nama: "Flat Dumbbell Press",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/Dumbbell-Chest-Press.gif",
      },
      {
        nama: "Lat Pull Down",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://media.tenor.com/mBPvMzz9Y_kAAAAd/lat-pulldowns.gif",
      },
      {
        nama: "Cable Row",
        reps: "12 Reps x 4 Sets",
        gambar: "https://i.makeagif.com/media/4-28-2015/ibwPMp.gif",
      },
      {
        nama: "Dumbbell Shoulder Press",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://post.healthline.com/wp-content/uploads/2019/06/Standing-dumbbell-military-press.gif",
      },
      {
        nama: "Lateral Raise",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://cdn.jefit.com/assets/img/exercises/gifs/32.gif",
      },
      {
        nama: "Bicep Curl",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif",
      },
      {
        nama: "Tricep Push Down",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://blog.squatwolf.com/wp-content/uploads/2021/05/ezgif.com-gif-maker-1.gif",
      },
    ],
  },
  {
    hari: "Sabtu",
    judul: "Sabtu Pull Day (Back, Rear Delt, Bicep):",
    latihan: [
      {
        nama: "Lat Pulldown",
        reps: "12 reps x 4 Sets",
        gambar:
          "https://vidafitness.com.au/wp-content/uploads/2020/03/58-3498309-Lat-Pulldown-GIF-26427b91730d4039a39d557e21c9e494.gif",
      },
      {
        nama: "Barbell Row",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://hips.hearstapps.com/hmg-prod/images/workouts/2017/04/barbellrow-1491916911.gif",
      },
      {
        nama: "Cable Row",
        reps: "12 Reps x 4 Sets",
        gambar: "https://i.makeagif.com/media/4-28-2015/ibwPMp.gif",
      },
      {
        nama: "Cable Face Pull Full",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i0.wp.com/b-reddy.org/wp-content/uploads/2016/02/facepull-gif.gif?fit=360%2C202&ssl=1",
      },
      {
        nama: "Bicep Curl",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://i.pinimg.com/originals/8c/53/27/8c532774e4e1c524576bf1fb829ad895.gif",
      },
      {
        nama: "Hammer Curl",
        reps: "12 Reps x 4 Sets",
        gambar:
          "https://barbend.com/wp-content/uploads/2021/08/hammer-curl-barbend-movement-gif-masters.gif",
      },
    ],
  },
  {
    hari: "Minggu",
    judul: "Minggu Rest Day",
    latihan: [],
  },
];

let hariAktif = localStorage.getItem("hariAktif") || 0;
hariAktif = parseInt(hariAktif);

function tampilkanJadwal(hari) {
  const jadwalHari = daftarHari[hari];

  if (jadwalHari.hari === "Minggu") {
    // Jika hari adalah Minggu, tampilkan tampilan khusus
    jadwalContainer.innerHTML = `
      <h1>Minggu Rest Day!</h1>
      <br>
      <h4>Terima kasih sudah berjuang sejauh ini! <br> lanjutkan lagi perjuangannya esok hari!</h4>
    `;
    jadwalContainer.style.display = "block";
    document.title = "Jadwal Workout (Minggu)";
  } else {
    // Jika bukan hari Minggu, tampilkan jadwal workout seperti biasa
    let htmlJadwal = `
      <h2>${jadwalHari.judul}</h2>
      <ul>
    `;

    jadwalHari.latihan.forEach((latihan) => {
      htmlJadwal += `
        <li>
          <h3>${latihan.nama} (${latihan.reps})</h3>
          <img src="${latihan.gambar}" alt="${latihan.nama}">
        </li>
      `;
    });

    htmlJadwal += `</ul>`;
    jadwalContainer.innerHTML = htmlJadwal;
    jadwalContainer.style.display = "block";

    document.title = `Jadwal Workout (${jadwalHari.hari})`;
  }
}

function pindahHari(arah) {
  jadwalContainer.style.display = "none";
  hariAktif =
    (hariAktif + arah + daftarHari.length) % daftarHari.length;
  tampilkanJadwal(hariAktif);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  localStorage.setItem("hariAktif", hariAktif);
}

prevDayBtn.addEventListener("click", () => pindahHari(-1));
nextDayBtn.addEventListener("click", () => pindahHari(1));

tampilkanJadwal(hariAktif);
