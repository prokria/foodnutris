import { ColorType, getRandomColor } from "./helper";

export type FoodDataType = {
  meals: string[];
  id: number;
  name: string;
  nameEn: string;
  calorie: number;
  carbohydrate: number;
  fat: number;
  protein: number;
  color: ColorType;
};

const foodData: FoodDataType[] = [
  {
    meals: ["Lunch", "Dinner"],
    id: 1,
    name: "চিকেন কারি",
    nameEn: "Chicken Curry",
    calorie: 250,
    carbohydrate: 14,
    fat: 18,
    protein: 19,
    color: "info",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 2,
    name: "চিকেন ভুনা",
    nameEn: "Chicken ভুনা",
    calorie: 177,
    carbohydrate: 15,
    fat: 12,
    protein: 20,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Lunch", "Dinner"],
    id: 3,
    name: "চিকেন কাটলেট",
    nameEn: "Chicken কাটলেট",
    calorie: 375,
    carbohydrate: 30,
    fat: 25,
    protein: 30,
    color: "warning",
  },
  {
    meals: ["MorningSnacks", "Lunch", "Dinner"],
    id: 4,
    name: "চিকেন ফ্রাই",
    nameEn: "Chicken ফ্রাই",
    calorie: 390,
    carbohydrate: 28,
    fat: 24,
    protein: 22,
    color: "info",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 5,
    name: "চিকেন লিভার কারি",
    nameEn: "Chicken লিভার কারি",
    calorie: 172,
    carbohydrate: 5,
    fat: 12,
    protein: 18,
    color: "default",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 6,
    name: "টিকা চিকেন",
    nameEn: "টিকা চিকেন",
    calorie: 148,
    carbohydrate: 10,
    fat: 7,
    protein: 24,
    color: "info",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 7,
    name: "গরুর ভুনা",
    nameEn: "Beef ভুনা",
    calorie: 434,
    carbohydrate: 22,
    fat: 30,
    protein: 32,
    color: "info",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 8,
    name: "গরুর লিভার কারি",
    nameEn: "Beef লিভার কারি",
    calorie: 135,
    carbohydrate: 5,
    fat: 7,
    protein: 16,
    color: "warning",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 9,
    name: "গরুর কাটলেট",
    nameEn: "Beef কাটলেট",
    calorie: 500,
    carbohydrate: 35,
    fat: 40,
    protein: 35,
    color: "warning",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 10,
    name: "গরুর কারি",
    nameEn: "Beef কারি",
    calorie: 167,
    carbohydrate: 14,
    fat: 10,
    protein: 22,
    color: "secondary",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 11,
    name: "গরুর কিমা",
    nameEn: "Beef কিমা",
    calorie: 555,
    carbohydrate: 10,
    fat: 48,
    protein: 42,
    color: "warning",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 12,
    name: "গরুর শামি কাবাব",
    nameEn: "Beef শামি কাবাব",
    calorie: 210,
    carbohydrate: 20,
    fat: 12,
    protein: 18,
    color: "success",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 13,
    name: "খাসির কারি",
    nameEn: "Mutton কারি",
    calorie: 143,
    carbohydrate: 12,
    fat: 8,
    protein: 19,
    color: "error",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 14,
    name: "খাসির রেজালা",
    nameEn: "Mutton রেজালা",
    calorie: 323,
    carbohydrate: 24,
    fat: 22,
    protein: 27,
    color: "default",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 15,
    name: "খাসির রোস্ট",
    nameEn: "Mutton রোস্ট",
    calorie: 300,
    carbohydrate: 0,
    fat: 25,
    protein: 25,
    color: "secondary",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 16,
    name: "মাছ কারি",
    nameEn: "Fish কারি",
    calorie: 381,
    carbohydrate: 18,
    fat: 22,
    protein: 30,
    color: "success",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 17,
    name: "মাছের কাটলেট",
    nameEn: "Fish কাটলেট",
    calorie: 228,
    carbohydrate: 25,
    fat: 15,
    protein: 18,
    color: "default",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 18,
    name: "চিংড়ি কারি",
    nameEn: "চিংড়ি কারি",
    calorie: 261,
    carbohydrate: 12,
    fat: 18,
    protein: 19,
    color: "secondary",
  },
  {
    meals: ["MorningSnacks", "Lunch", "Dinner"],
    id: 19,
    name: "ফিশ ফিঙ্গার",
    nameEn: "Fish Finger",
    calorie: 220,
    carbohydrate: 24,
    fat: 12,
    protein: 14,
    color: "success",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 20,
    name: "স্যামন মাছ",
    nameEn: "স্যামন মাছ",
    calorie: 180,
    carbohydrate: 0,
    fat: 13,
    protein: 20,
    color: "secondary",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 21,
    name: "চিংড়ি (বড়, সেদ্ধ)",
    nameEn: "চিংড়ি (বড়, সেদ্ধ)",
    calorie: 100,
    carbohydrate: 0.5,
    fat: 1,
    protein: 23,
    color: "success",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 22,
    name: "কালা মটর (রান্না করা)",
    nameEn: "কালা মটর (রান্না করা)",
    calorie: 107,
    carbohydrate: 24,
    fat: 1,
    protein: 8,
    color: "secondary",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 23,
    name: "মুগ ডাল (রান্না করা)",
    nameEn: "মুগ ডাল (রান্না করা)",
    calorie: 150,
    carbohydrate: 35,
    fat: 1,
    protein: 8,
    color: "default",
  },
  {
    meals: ["Lunch", "Dinner"],
    id: 24,
    name: "মসুর ডাল (রান্না করা)",
    nameEn: "মসুর ডাল (রান্না করা)",
    calorie: 226,
    carbohydrate: 40,
    fat: 2,
    protein: 24,
    color: "warning",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Dinner"],
    id: 25,
    name: "ডিম পোচ (তেল ছাড়া)",
    nameEn: "Egg পোচ (তেল ছাড়া)",
    calorie: 80,
    carbohydrate: 0.6,
    fat: 6,
    protein: 7,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Dinner"],
    id: 26,
    name: "ডিম পোচ (তেল দিয়ে)",
    nameEn: "Egg পোচ (তেল দিয়ে)",
    calorie: 202,
    carbohydrate: 0.6,
    fat: 17,
    protein: 7,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Dinner"],
    id: 27,
    name: "সিদ্ধ ডিম",
    nameEn: "সিদ্ধ ডিম",
    calorie: 75,
    carbohydrate: 0.6,
    fat: 6,
    protein: 7,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Lunch", "Dinner"],
    id: 28,
    name: "ডিম ভাজি",
    nameEn: "Egg ভাজি",
    calorie: 133,
    carbohydrate: 3,
    fat: 12,
    protein: 7,
    color: "primary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Lunch", "Dinner", "BedSnacks"],
    id: 29,
    name: "দুধ",
    nameEn: "দুধ",
    calorie: 146,
    carbohydrate: 5,
    fat: 8,
    protein: 3,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Dinner", "BedSnacks"],
    id: 30,
    name: "সয়া দুধ",
    nameEn: "সয়া দুধ",
    calorie: 90,
    carbohydrate: 4,
    fat: 4,
    protein: 8,
    color: "warning",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Dinner", "BedSnacks"],
    id: 31,
    name: "লো ফ্যাট দুধ",
    nameEn: "লো ফ্যাট দুধ",
    calorie: 90,
    carbohydrate: 5,
    fat: 2,
    protein: 8,
    color: "error",
  },
  {
    meals: ["BreakFast", "MorningSnacks"],
    id: 32,
    name: "জেলি",
    nameEn: "জেলি",
    calorie: 20,
    carbohydrate: 6,
    fat: 0,
    protein: 0,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks"],
    id: 33,
    name: "জ্যাম",
    nameEn: "জ্যাম",
    calorie: 25,
    carbohydrate: 8,
    fat: 0,
    protein: 0,
    color: "primary",
  },
  {
    meals: ["BreakFast", "MorningSnacks"],
    id: 34,
    name: "চকলেট",
    nameEn: "চকলেট",
    calorie: 250,
    carbohydrate: 50,
    fat: 10,
    protein: 2,
    color: "warning",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 35,
    name: "মেয়োনিজ",
    nameEn: "মেয়োনিজ",
    calorie: 90,
    carbohydrate: 10,
    fat: 8,
    protein: 0,
    color: "warning",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 36,
    name: "সামুচা",
    nameEn: "সামুচা",
    calorie: 300,
    carbohydrate: 40,
    fat: 15,
    protein: 10,
    color: "success",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 37,
    name: "স্প্রিং অনিয়ন",
    nameEn: "স্প্রিং অনিয়ন",
    calorie: 20,
    carbohydrate: 4,
    fat: 0,
    protein: 2,
    color: "primary",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 38,
    name: "আলুর চপ",
    nameEn: "আলুর চপ",
    calorie: 250,
    carbohydrate: 30,
    fat: 15,
    protein: 10,
    color: "primary",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 39,
    name: "পেয়াজু/ পাকোড়া",
    nameEn: "পেয়াজু/ পাকোড়া",
    calorie: 200,
    carbohydrate: 25,
    fat: 10,
    protein: 5,
    color: "default",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 40,
    name: "ডালপুরি",
    nameEn: "ডালপুরি",
    calorie: 350,
    carbohydrate: 45,
    fat: 20,
    protein: 15,
    color: "info",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 41,
    name: "সিঙ্গারা",
    nameEn: "সিঙ্গারা",
    calorie: 200,
    carbohydrate: 25,
    fat: 10,
    protein: 5,
    color: "error",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 42,
    name: "হরলিক্স",
    nameEn: "হরলিক্স",
    calorie: 50,
    carbohydrate: 9,
    fat: 1,
    protein: 3,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 43,
    name: "চকলেট ওভালটিন",
    nameEn: "চকলেট ওভালটিন",
    calorie: 60,
    carbohydrate: 12,
    fat: 2,
    protein: 3,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 44,
    name: "ওভালটিন",
    nameEn: "ওভালটিন",
    calorie: 50,
    carbohydrate: 10,
    fat: 1,
    protein: 2,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 45,
    name: "ভাপা পিঠা",
    nameEn: "ভাপা পিঠা",
    calorie: 250,
    carbohydrate: 30,
    fat: 10,
    protein: 10,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 46,
    name: "তেলের পিঠা(মালপোয়া)",
    nameEn: "তেলের পিঠা(মালপোয়া)",
    calorie: 250,
    carbohydrate: 30,
    fat: 10,
    protein: 10,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 47,
    name: "পাটিসাপটা",
    nameEn: "পাটিসাপটা",
    calorie: 250,
    carbohydrate: 30,
    fat: 10,
    protein: 10,
    color: "warning",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 48,
    name: "টক দই",
    nameEn: "টক দই",
    calorie: 100,
    carbohydrate: 10,
    fat: 0,
    protein: 6,
    color: "error",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 49,
    name: "ফালুদা",
    nameEn: "ফালুদা",
    calorie: 400,
    carbohydrate: 50,
    fat: 20,
    protein: 10,
    color: "primary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 50,
    name: "ফলের কাস্টার্ড",
    nameEn: "ফলের কাস্টার্ড",
    calorie: 300,
    carbohydrate: 30,
    fat: 10,
    protein: 10,
    color: "warning",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 51,
    name: "মিষ্টি দই",
    nameEn: "মিষ্টি দই",
    calorie: 100,
    carbohydrate: 10,
    fat: 0,
    protein: 5,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 52,
    name: "কফি ১ চা চামচ (দুধ ও চিনি সহ)",
    nameEn: "কফি ১ চা চামচ (দুধ ও চিনি সহ)",
    calorie: 100,
    carbohydrate: 12,
    fat: 7,
    protein: 2,
    color: "warning",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 53,
    name: "কফি (দুধ ও চিনি ছাড়া)",
    nameEn: "কফি (দুধ ও চিনি ছাড়া)",
    calorie: 2,
    carbohydrate: 0,
    fat: 0,
    protein: 0,
    color: "secondary",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 54,
    name: "কমলার জুস (চিনি ছাড়া)",
    nameEn: "কমলার জুস (চিনি ছাড়া)",
    calorie: 95,
    carbohydrate: 15,
    fat: 0,
    protein: 0,
    color: "error",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 55,
    name: "পেপের জুস (চিনি ছাড়া)",
    nameEn: "পেপের জুস (চিনি ছাড়া)",
    calorie: 141,
    carbohydrate: 25,
    fat: 0,
    protein: 0,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 56,
    name: "লাচ্ছি (চিনি সহ)",
    nameEn: "লাচ্ছি (চিনি সহ)",
    calorie: 150,
    carbohydrate: 30,
    fat: 10,
    protein: 10,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 57,
    name: "ডাবের পানি",
    nameEn: "ডাবের পানি",
    calorie: 50,
    carbohydrate: 10,
    fat: 0,
    protein: 0,
    color: "warning",
  },
  {
    meals: ["Lunch", "AfternoonSnacks"],
    id: 58,
    name: "বোরহানি",
    nameEn: "বোরহানি",
    calorie: 100,
    carbohydrate: 15,
    fat: 5,
    protein: 5,
    color: "info",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 59,
    name: "মিক্সড সবজি এবং ফলের জুস",
    nameEn: "মিক্সড সবজি এবং ফলের জুস",
    calorie: 72,
    carbohydrate: 12,
    fat: 0,
    protein: 2,
    color: "default",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 60,
    name: "লেবুর রস",
    nameEn: "লেবুর রস",
    calorie: 5,
    carbohydrate: 1,
    fat: 0,
    protein: 0,
    color: "error",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks", "Dinner"],
    id: 61,
    name: "কোমল পানীয়",
    nameEn: "কোমল পানীয়",
    calorie: 250,
    carbohydrate: 60,
    fat: 10,
    protein: 5,
    color: "success",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 62,
    name: "আপেলের জুস(চিনি ছাড়া)এক গ্লাস",
    nameEn: "আপেলের জুস(চিনি ছাড়া)এক গ্লাস",
    calorie: 117,
    carbohydrate: 25,
    fat: 0,
    protein: 0,
    color: "success",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 63,
    name: "আঙ্গুরের জুস (চিনি ছাড়া)এক গ্লাস",
    nameEn: "আঙ্গুরের জুস (চিনি ছাড়া)এক গ্লাস",
    calorie: 154,
    carbohydrate: 30,
    fat: 0,
    protein: 0,
    color: "primary",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 64,
    name: "চকলেট মিল্ক সেক",
    nameEn: "চকলেট মিল্ক সেক",
    calorie: 900,
    carbohydrate: 100,
    fat: 40,
    protein: 15,
    color: "primary",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 65,
    name: "ঢাকাই পনির",
    nameEn: "ঢাকাই পনির",
    calorie: 20,
    carbohydrate: 1,
    fat: 1,
    protein: 4,
    color: "secondary",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 66,
    name: "মজারেলা পনির",
    nameEn: "মজারেলা পনির",
    calorie: 330,
    carbohydrate: 23,
    fat: 20,
    protein: 28,
    color: "success",
  },
  {
    meals: ["BreakFast", "AfternoonSnacks"],
    id: 67,
    name: "চিকেন স্যান্ডউইচ",
    nameEn: "Chicken স্যান্ডউইচ",
    calorie: 540,
    carbohydrate: 45,
    fat: 35,
    protein: 18,
    color: "info",
  },
  {
    meals: ["BreakFast", "AfternoonSnacks"],
    id: 68,
    name: "হট ডগ",
    nameEn: "হট ডগ",
    calorie: 420,
    carbohydrate: 35,
    fat: 25,
    protein: 17,
    color: "primary",
  },
  {
    meals: ["BreakFast", "AfternoonSnacks"],
    id: 69,
    name: "চিকেন রোল",
    nameEn: "Chicken রোল",
    calorie: 380,
    carbohydrate: 30,
    fat: 25,
    protein: 15,
    color: "warning",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 70,
    name: "আলুর চিপস",
    nameEn: "আলুর চিপস",
    calorie: 180,
    carbohydrate: 15,
    fat: 10,
    protein: 5,
    color: "error",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 71,
    name: "বিফ বার্গার",
    nameEn: "বিফ বার্গার",
    calorie: 580,
    carbohydrate: 40,
    fat: 35,
    protein: 25,
    color: "info",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 72,
    name: "চিকেন বার্গার",
    nameEn: "Chicken বার্গার",
    calorie: 560,
    carbohydrate: 35,
    fat: 30,
    protein: 25,
    color: "success",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 73,
    name: "ফুসকা",
    nameEn: "ফুসকা",
    calorie: 300,
    carbohydrate: 25,
    fat: 20,
    protein: 15,
    color: "info",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 74,
    name: "চটপটি",
    nameEn: "চটপটি",
    calorie: 300,
    carbohydrate: 30,
    fat: 20,
    protein: 15,
    color: "warning",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 75,
    name: "পাপড় তেলে ভাজা",
    nameEn: "পাপড় তেলে ভাজা",
    calorie: 220,
    carbohydrate: 20,
    fat: 15,
    protein: 10,
    color: "info",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 76,
    name: "পাপড় গ্রিল্ড/ মাইক্রোওভেন",
    nameEn: "পাপড় গ্রিল্ড/ মাইক্রোওভেন",
    calorie: 220,
    carbohydrate: 20,
    fat: 10,
    protein: 10,
    color: "default",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 77,
    name: "নিমকি",
    nameEn: "নিমকি",
    calorie: 120,
    carbohydrate: 10,
    fat: 5,
    protein: 5,
    color: "secondary",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 78,
    name: "পিজ্জা",
    nameEn: "পিজ্জা",
    calorie: 600,
    carbohydrate: 50,
    fat: 35,
    protein: 25,
    color: "error",
  },
  {
    meals: ["BreakFast", "AfternoonSnacks"],
    id: 79,
    name: "নোনতা বিস্কুট",
    nameEn: "নোনতা বিস্কুট",
    calorie: 140,
    carbohydrate: 10,
    fat: 5,
    protein: 5,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "AfternoonSnacks"],
    id: 80,
    name: "ক্রিম বিস্কুট",
    nameEn: "ক্রিম বিস্কুট",
    calorie: 120,
    carbohydrate: 10,
    fat: 5,
    protein: 5,
    color: "default",
  },
  {
    meals: ["BreakFast", "AfternoonSnacks"],
    id: 81,
    name: "টোস্ট বিস্কুট",
    nameEn: "টোস্ট বিস্কুট",
    calorie: 140,
    carbohydrate: 10,
    fat: 5,
    protein: 5,
    color: "default",
  },
  {
    meals: ["AfternoonSnacks"],
    id: 82,
    name: "চানাচুর",
    nameEn: "চানাচুর",
    calorie: 300,
    carbohydrate: 30,
    fat: 10,
    protein: 15,
    color: "warning",
  },
  {
    meals: ["Dinner"],
    id: 83,
    name: "পোলাও (মাংস/শাক)",
    nameEn: "পোলাও (মাংস/শাক)",
    calorie: 300,
    carbohydrate: 45,
    fat: 15,
    protein: 15,
    color: "success",
  },
  {
    meals: ["Dinner"],
    id: 84,
    name: "বিরিয়ানি (মাংস/শাক)",
    nameEn: "বিরিয়ানি (মাংস/শাক)",
    calorie: 350,
    carbohydrate: 45,
    fat: 20,
    protein: 15,
    color: "info",
  },
  {
    meals: ["Dinner"],
    id: 85,
    name: "খিচুড়ি",
    nameEn: "খিচুড়ি",
    calorie: 280,
    carbohydrate: 40,
    fat: 15,
    protein: 10,
    color: "default",
  },
  {
    meals: ["Dinner"],
    id: 86,
    name: "মাছের ঝোল (রুই/ইলিশ)",
    nameEn: "Fishের ঝোল (রুই/ইলিশ)",
    calorie: 200,
    carbohydrate: 10,
    fat: 15,
    protein: 20,
    color: "default",
  },
  {
    meals: ["Dinner"],
    id: 87,
    name: "চালের ভাত",
    nameEn: "চালের ভাত",
    calorie: 180,
    carbohydrate: 40,
    fat: 0.5,
    protein: 3,
    color: "success",
  },
  {
    meals: ["BreakFast", "Dinner"],
    id: 88,
    name: "রুটি",
    nameEn: "রুটি",
    calorie: 250,
    carbohydrate: 50,
    fat: 7,
    protein: 7,
    color: "secondary",
  },
  {
    meals: ["Dinner"],
    id: 89,
    name: "লাল শাক",
    nameEn: "লাল শাক",
    calorie: 35,
    carbohydrate: 5,
    fat: 0.5,
    protein: 2,
    color: "error",
  },
  {
    meals: ["Dinner"],
    id: 90,
    name: "পালং শাক",
    nameEn: "পালং শাক",
    calorie: 30,
    carbohydrate: 4,
    fat: 0.5,
    protein: 2,
    color: "primary",
  },
  {
    meals: ["Dinner"],
    id: 91,
    name: "ডাল (মসুর/মুগ)",
    nameEn: "ডাল (মসুর/মুগ)",
    calorie: 180,
    carbohydrate: 40,
    fat: 4,
    protein: 12,
    color: "primary",
  },
  {
    meals: ["Dinner"],
    id: 92,
    name: "মাংসের ঝোল (গরু/মুরগ)",
    nameEn: "মাংসের ঝোল (গরু/মুরগ)",
    calorie: 250,
    carbohydrate: 15,
    fat: 20,
    protein: 25,
    color: "primary",
  },
  {
    meals: ["Dinner"],
    id: 93,
    name: "ভর্তা (বেগুন/আলু)",
    nameEn: "ভর্তা (বেগুন/আলু)",
    calorie: 150,
    carbohydrate: 25,
    fat: 5,
    protein: 5,
    color: "secondary",
  },
  {
    meals: ["MorningSnacks", "Dinner"],
    id: 94,
    name: "স্যুপ (মাংস/শাক)",
    nameEn: "স্যুপ (মাংস/শাক)",
    calorie: 70,
    carbohydrate: 5,
    fat: 4,
    protein: 4,
    color: "secondary",
  },
  {
    meals: ["Dinner"],
    id: 95,
    name: "সালাদ",
    nameEn: "সালাদ",
    calorie: 30,
    carbohydrate: 4,
    fat: 1,
    protein: 1,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 96,
    name: "পেস্তা বাদাম",
    nameEn: "পেস্তা বাদাম",
    calorie: 567,
    carbohydrate: 20,
    fat: 50,
    protein: 21,
    color: "success",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 97,
    name: "কাজু বাদাম",
    nameEn: "কাজু বাদাম",
    calorie: 553,
    carbohydrate: 25,
    fat: 44,
    protein: 27,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 98,
    name: "চিনা বাদাম",
    nameEn: "চিনা বাদাম",
    calorie: 543,
    carbohydrate: 22,
    fat: 45,
    protein: 25,
    color: "warning",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 99,
    name: "কাঠ বাদাম",
    nameEn: "কাঠ বাদাম",
    calorie: 654,
    carbohydrate: 14,
    fat: 54,
    protein: 21,
    color: "primary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 100,
    name: "কিশমিশ",
    nameEn: "কিশমিশ",
    calorie: 281,
    carbohydrate: 68,
    fat: 30,
    protein: 2,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 101,
    name: "চিজ কেক",
    nameEn: "চিজ কেক",
    calorie: 400,
    carbohydrate: 45,
    fat: 25,
    protein: 10,
    color: "default",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 102,
    name: "চকলেট কেক",
    nameEn: "চকলেট কেক",
    calorie: 350,
    carbohydrate: 45,
    fat: 25,
    protein: 6,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 103,
    name: "প্লেইন কেক",
    nameEn: "প্লেইন কেক",
    calorie: 218,
    carbohydrate: 32,
    fat: 10,
    protein: 7,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 104,
    name: "চিনি",
    nameEn: "চিনি",
    calorie: 16,
    carbohydrate: 4,
    fat: 0,
    protein: 0,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 105,
    name: "গুড়",
    nameEn: "গুড়",
    calorie: 25,
    carbohydrate: 7,
    fat: 0,
    protein: 0,
    color: "error",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 106,
    name: "টফি",
    nameEn: "টফি",
    calorie: 370,
    carbohydrate: 90,
    fat: 20,
    protein: 2,
    color: "success",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks", "BedSnacks"],
    id: 107,
    name: "মধু",
    nameEn: "মধু",
    calorie: 22,
    carbohydrate: 6,
    fat: 0,
    protein: 0,
    color: "secondary",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 108,
    name: "আইস ক্রিম",
    nameEn: "আইস ক্রিম",
    calorie: 280,
    carbohydrate: 34,
    fat: 12,
    protein: 6,
    color: "default",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 109,
    name: "পেস্ট্রি",
    nameEn: "পেস্ট্রি",
    calorie: 340,
    carbohydrate: 50,
    fat: 15,
    protein: 5,
    color: "error",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 110,
    name: "ছানার সন্দেশ",
    nameEn: "ছানার সন্দেশ",
    calorie: 250,
    carbohydrate: 25,
    fat: 15,
    protein: 8,
    color: "warning",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 111,
    name: "বালুসাই",
    nameEn: "বালুসাই",
    calorie: 320,
    carbohydrate: 40,
    fat: 15,
    protein: 6,
    color: "error",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 112,
    name: "রসমালাই১০০গ্রাম",
    nameEn: "রসমালাই১০০গ্রাম",
    calorie: 30,
    carbohydrate: 10,
    fat: 8,
    protein: 0,
    color: "secondary",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 113,
    name: "জিলাপি",
    nameEn: "জিলাপি",
    calorie: 300,
    carbohydrate: 40,
    fat: 15,
    protein: 5,
    color: "error",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 114,
    name: "সুজির হালুয়া",
    nameEn: "সুজির হালুয়া",
    calorie: 100,
    carbohydrate: 20,
    fat: 5,
    protein: 2,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 115,
    name: "বুটের হালুয়া/ বরফি",
    nameEn: "বুটের হালুয়া/ বরফি",
    calorie: 250,
    carbohydrate: 40,
    fat: 15,
    protein: 5,
    color: "info",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 116,
    name: "জর্দা",
    nameEn: "জর্দা",
    calorie: 200,
    carbohydrate: 25,
    fat: 10,
    protein: 5,
    color: "default",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 117,
    name: "রসগোল্লা",
    nameEn: "রসগোল্লা",
    calorie: 300,
    carbohydrate: 40,
    fat: 15,
    protein: 5,
    color: "secondary",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 118,
    name: "চমচম",
    nameEn: "চমচম",
    calorie: 350,
    carbohydrate: 50,
    fat: 20,
    protein: 5,
    color: "primary",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 119,
    name: "লাড্ডু",
    nameEn: "লাড্ডু",
    calorie: 350,
    carbohydrate: 50,
    fat: 20,
    protein: 5,
    color: "primary",
  },
  {
    meals: ["MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 120,
    name: "লালমোহন",
    nameEn: "লালমোহন",
    calorie: 300,
    carbohydrate: 40,
    fat: 15,
    protein: 5,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 121,
    name: "গাজরের হালুয়া চিনি সহ",
    nameEn: "গাজরের হালুয়া চিনি সহ",
    calorie: 300,
    carbohydrate: 50,
    fat: 20,
    protein: 5,
    color: "secondary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 122,
    name: "নারিকেল বরফি",
    nameEn: "নারিকেল বরফি",
    calorie: 100,
    carbohydrate: 20,
    fat: 5,
    protein: 2,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 123,
    name: "পায়েশ",
    nameEn: "পায়েশ",
    calorie: 300,
    carbohydrate: 40,
    fat: 15,
    protein: 5,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "Lunch", "AfternoonSnacks"],
    id: 124,
    name: "ক্যারামেল পুডিং",
    nameEn: "ক্যারামেল পুডিং",
    calorie: 150,
    carbohydrate: 25,
    fat: 10,
    protein: 5,
    color: "primary",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 125,
    name: "মেয়নেজ",
    nameEn: "মেয়নেজ",
    calorie: 100,
    carbohydrate: 0,
    fat: 10,
    protein: 0,
    color: "info",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 126,
    name: "লো ফ্যাট মেয়নেইস",
    nameEn: "লো ফ্যাট মেয়নেইস",
    calorie: 40,
    carbohydrate: 0,
    fat: 4,
    protein: 0,
    color: "warning",
  },
  {
    meals: ["BreakFast", "MorningSnacks", "AfternoonSnacks"],
    id: 127,
    name: "পিনাট বাটার",
    nameEn: "পিনাট বাটার",
    calorie: 95,
    carbohydrate: 10,
    fat: 8,
    protein: 3,
    color: "info",
  },
  {
    meals: ["MorningSnacks", "AfternoonSnacks"],
    id: 128,
    name: "টমেটো সস",
    nameEn: "টমেটো সস",
    calorie: 22,
    carbohydrate: 4,
    fat: 1,
    protein: 0,
    color: "error",
  },
  {
    meals: [],
    id: 129,
    name: "সয়াবিন তেল",
    nameEn: "সয়াবিন তেল",
    calorie: 120,
    carbohydrate: 0,
    fat: 12,
    protein: 0,
    color: "warning",
  },
  {
    meals: [],
    id: 130,
    name: "জলপাই তেল",
    nameEn: "জলপাই তেল",
    calorie: 120,
    carbohydrate: 0,
    fat: 12,
    protein: 0,
    color: "default",
  },
  {
    meals: [],
    id: 131,
    name: "ক্যানোলা তেল",
    nameEn: "ক্যানোলা তেল",
    calorie: 120,
    carbohydrate: 0,
    fat: 12,
    protein: 0,
    color: "info",
  },
  {
    meals: [],
    id: 132,
    name: "সরষের তেল",
    nameEn: "সরষের তেল",
    calorie: 120,
    carbohydrate: 0,
    fat: 12,
    protein: 0,
    color: "default",
  },
  {
    meals: [],
    id: 133,
    name: "মাখন",
    nameEn: "মাখন",
    calorie: 100,
    carbohydrate: 0,
    fat: 11,
    protein: 0,
    color: "secondary",
  },
  {
    meals: [],
    id: 134,
    name: "মার্জারিন",
    nameEn: "মার্জারিন",
    calorie: 100,
    carbohydrate: 0,
    fat: 10,
    protein: 0,
    color: "primary",
  },
  {
    meals: [],
    id: 135,
    name: "ঘি",
    nameEn: "ঘি",
    calorie: 120,
    carbohydrate: 0,
    fat: 12,
    protein: 0,
    color: "info",
  },
  {
    meals: [],
    id: 136,
    name: "অলিভ অয়েল/ সান ফ্লাওয়ার তেল",
    nameEn: "অলিভ অয়েল/ সান ফ্লাওয়ার তেল",
    calorie: 120,
    carbohydrate: 0,
    fat: 12,
    protein: 0,
    color: "primary",
  },
  {
    meals: ["Dinner"],
    id: 137,
    name: "ডিম কারি",
    nameEn: "Egg কারি",
    calorie: 200,
    carbohydrate: 10,
    fat: 15,
    protein: 15,
    color: "warning",
  },
];

export default foodData;
