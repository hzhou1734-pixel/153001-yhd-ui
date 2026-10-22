"use client";

// Recovered from the published 顾好家 UI prototype (1530.ui.ehaiba.net).
import * as __jsxRuntime from "react/jsx-runtime";
import * as __React from "react";
import __NextImage from "next/image";
import { cn as eb } from "@/lib/utils";

let s, t, l, a, n;
var r,
  i = __jsxRuntime,
  c = __React;
let x = (0, c.createContext)(null);
function C_d({ children: e, initial: s = "home" }) {
  let [t, l] = (0, c.useState)([s]),
    [a, n] = (0, c.useState)(null),
    r = (0, c.useRef)(void 0),
    o = (0, c.useMemo)(
      () => ({
        cur: t[t.length - 1],
        canBack: t.length > 1,
        go: (e) => l((s) => [...s, e]),
        back: () => l((e) => (e.length > 1 ? e.slice(0, -1) : ["home"])),
        replace: (e) => l((s) => [...s.slice(0, -1), e]),
        reset: (e) => l([e]),
        jump: (e) => l("home" === e ? ["home"] : ["home", e]),
        toast: (e) => {
          (n(e), clearTimeout(r.current), (r.current = setTimeout(() => n(null), 1800)));
        },
        toastMsg: a,
      }),
      [t, a],
    );
  return <x.Provider value={o}>{e}</x.Provider>;
}
function o() {
  let e = (0, c.useContext)(x);
  if (!e) throw Error("useRouter must be used inside RouterProvider");
  return e;
}
let eg = (...e) =>
    e
      .filter((e, s, t) => !!e && "" !== e.trim() && t.indexOf(e) === s)
      .join(" ")
      .trim(),
  eN = (e) => {
    let s = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, s, t) => (t ? t.toUpperCase() : s.toLowerCase()));
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
var ek = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
let ey = (0, c.createContext)({}),
  ev = (0, c.forwardRef)(
    (
      { color: e, size: s, strokeWidth: t, absoluteStrokeWidth: l, className: a = "", children: n, iconNode: r, ...i },
      x,
    ) => {
      let {
          size: d = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: m = !1,
          color: p = "currentColor",
          className: h = "",
        } = (0, c.useContext)(ey) ?? {},
        u = (l ?? m) ? (24 * Number(t ?? o)) / Number(s ?? d) : (t ?? o);
      return (0, c.createElement)(
        "svg",
        {
          ref: x,
          ...ek,
          width: s ?? d ?? ek.width,
          height: s ?? d ?? ek.height,
          stroke: e ?? p,
          strokeWidth: u,
          className: eg("lucide", h, a),
          ...(!n &&
            !((e) => {
              for (let s in e) if (s.startsWith("aria-") || "role" === s || "title" === s) return !0;
              return !1;
            })(i) && {
              "aria-hidden": "true",
            }),
          ...i,
        },
        [...r.map(([e, s]) => (0, c.createElement)(e, s)), ...(Array.isArray(n) ? n : [n])],
      );
    },
  ),
  ew = (e, s) => {
    let t = (0, c.forwardRef)(({ className: t, ...l }, a) =>
      (0, c.createElement)(ev, {
        ref: a,
        iconNode: s,
        className: eg(
          `lucide-${eN(e)
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()}`,
          `lucide-${e}`,
          t,
        ),
        ...l,
      }),
    );
    return ((t.displayName = eN(e)), t);
  },
  C_ez = ew("battery-full", [
    [
      "path",
      {
        d: "M10 10v4",
        key: "1mb2ec",
      },
    ],
    [
      "path",
      {
        d: "M14 10v4",
        key: "1nt88p",
      },
    ],
    [
      "path",
      {
        d: "M22 14v-4",
        key: "14q9d5",
      },
    ],
    [
      "path",
      {
        d: "M6 10v4",
        key: "1n77qd",
      },
    ],
    [
      "rect",
      {
        x: "2",
        y: "6",
        width: "16",
        height: "12",
        rx: "2",
        key: "13zb55",
      },
    ],
  ]),
  C_eC = ew("signal", [
    [
      "path",
      {
        d: "M2 20h.01",
        key: "4haj6o",
      },
    ],
    [
      "path",
      {
        d: "M7 20v-4",
        key: "j294jx",
      },
    ],
    [
      "path",
      {
        d: "M12 20v-8",
        key: "i3yub9",
      },
    ],
    [
      "path",
      {
        d: "M17 20V8",
        key: "1tkaf5",
      },
    ],
    [
      "path",
      {
        d: "M22 4v16",
        key: "sih9yq",
      },
    ],
  ]),
  C_eM = ew("wifi", [
    [
      "path",
      {
        d: "M12 20h.01",
        key: "zekei9",
      },
    ],
    [
      "path",
      {
        d: "M2 8.82a15 15 0 0 1 20 0",
        key: "dnpr2z",
      },
    ],
    [
      "path",
      {
        d: "M5 12.859a10 10 0 0 1 14 0",
        key: "1x1e6c",
      },
    ],
    [
      "path",
      {
        d: "M8.5 16.429a5 5 0 0 1 7 0",
        key: "1bycff",
      },
    ],
  ]);
function C_eS({ label: e, children: s }) {
  return (
    <div
      role="region"
      aria-label={e}
      className="relative h-[812px] w-[375px] shrink-0 overflow-hidden rounded-[42px] bg-page shadow-[0_0_0_10px_var(--color-shell),0_30px_60px_-20px_rgba(28,28,30,0.45)]"
    >
      {s}
    </div>
  );
}
function C_eP({ className: e }) {
  return (
    <div className={eb("absolute inset-x-0 top-0 z-20 flex h-[46px] items-center justify-between px-7 text-ink", e)}>
      <span className="text-[15px] font-semibold tabular-nums">9:41</span>
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <C_eC className="size-4" strokeWidth={2.2} />
        <C_eM className="size-4" strokeWidth={2.2} />
        <C_ez className="size-5" strokeWidth={1.8} />
      </div>
    </div>
  );
}
let e_ = ew("clipboard-list", [
    [
      "rect",
      {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6",
      },
    ],
    [
      "path",
      {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196",
      },
    ],
    [
      "path",
      {
        d: "M12 11h4",
        key: "1jrz19",
      },
    ],
    [
      "path",
      {
        d: "M12 16h4",
        key: "n85exb",
      },
    ],
    [
      "path",
      {
        d: "M8 11h.01",
        key: "1dfujw",
      },
    ],
    [
      "path",
      {
        d: "M8 16h.01",
        key: "18s6g9",
      },
    ],
  ]),
  C_eD = ew("house", [
    [
      "path",
      {
        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
        key: "5wwlr5",
      },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ]),
  eR = ew("user", [
    [
      "path",
      {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d",
      },
    ],
  ]),
  C_eL = ew("users", [
    [
      "path",
      {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq",
      },
    ],
    [
      "path",
      {
        d: "M16 3.128a4 4 0 0 1 0 7.744",
        key: "16gr8j",
      },
    ],
    [
      "path",
      {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd",
      },
    ],
    [
      "circle",
      {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8",
      },
    ],
  ]),
  eI = [
    {
      label: "首页",
      icon: C_eD,
      id: "home",
    },
    {
      label: "社区",
      icon: C_eL,
      id: "community",
    },
    {
      label: "订单",
      icon: e_,
      id: "orders",
    },
    {
      label: "我的",
      icon: eR,
      id: "profile",
    },
  ],
  eO = {
    home: 0,
    community: 1,
    orders: 2,
    ordersTrust: 2,
    ordersEscort: 2,
    ordersHelper: 2,
    profile: 3,
  };
function C_eA() {
  let { cur: e, reset: s } = o(),
    t = eO[e] ?? 0;
  return (
    <nav
      aria-label="底部导航"
      className="absolute inset-x-0 bottom-0 z-20 flex h-[68px] items-start rounded-t-[22px] bg-surface/95 pt-2 shadow-dock backdrop-blur-xl"
    >
      {eI.map((e, l) => {
        let C_a = e.icon,
          n = l === t;
        return (
          <button
            key={e.label}
            type="button"
            onClick={() => s(e.id)}
            aria-current={n ? "page" : void 0}
            className={eb("press flex flex-1 flex-col items-center gap-1", n ? "text-brand-deep" : "text-ink-3")}
          >
            <span
              className={eb(
                "relative flex h-7 items-center justify-center rounded-full transition-all",
                n ? "w-12 bg-brand-soft" : "w-7",
              )}
            >
              <C_a className="size-6" strokeWidth={1.8} />
              {2 === l ? (
                <span className="absolute -top-0.5 right-1 size-2 rounded-full bg-danger ring-2 ring-surface" />
              ) : null}
            </span>
            <span className={eb("text-[10px] leading-none", n && "font-semibold")}>{e.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
var eW = { Image: __NextImage },
  eW = eW;
let C_eH = ew("bell", [
    [
      "path",
      {
        d: "M10.268 21a2 2 0 0 0 3.464 0",
        key: "vwvbt9",
      },
    ],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi",
      },
    ],
  ]),
  C_eq = ew("calendar-days", [
    [
      "path",
      {
        d: "M8 2v4",
        key: "1cmpym",
      },
    ],
    [
      "path",
      {
        d: "M16 2v4",
        key: "4m81vk",
      },
    ],
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy",
      },
    ],
    [
      "path",
      {
        d: "M3 10h18",
        key: "8toen8",
      },
    ],
    [
      "path",
      {
        d: "M8 14h.01",
        key: "6423bh",
      },
    ],
    [
      "path",
      {
        d: "M12 14h.01",
        key: "1etili",
      },
    ],
    [
      "path",
      {
        d: "M16 14h.01",
        key: "1gbofw",
      },
    ],
    [
      "path",
      {
        d: "M8 18h.01",
        key: "lrp35t",
      },
    ],
    [
      "path",
      {
        d: "M12 18h.01",
        key: "mhygvu",
      },
    ],
    [
      "path",
      {
        d: "M16 18h.01",
        key: "kzsmim",
      },
    ],
  ]),
  C_e$ = ew("chevron-right", [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq",
      },
    ],
  ]),
  C_eF = ew("flame", [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih",
      },
    ],
  ]),
  C_eE = ew("map-pin", [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7",
      },
    ],
  ]),
  C_eB = ew("megaphone", [
    [
      "path",
      {
        d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
        key: "q8bfy3",
      },
    ],
    [
      "path",
      {
        d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
        key: "1853fq",
      },
    ],
    [
      "path",
      {
        d: "M8 6v8",
        key: "15ugcq",
      },
    ],
  ]),
  C_eV = ew("search", [
    [
      "path",
      {
        d: "m21 21-4.34-4.34",
        key: "14j7rj",
      },
    ],
    [
      "circle",
      {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u",
      },
    ],
  ]),
  eT = [
    {
      name: "健康小屋",
      image: "/images/svc-health.png",
      tint: "#FBE6DC",
    },
    {
      name: "托管服务",
      image: "/images/svc-care.png",
      tint: "#E4F4F0",
    },
    {
      name: "健康膳食",
      image: "/images/svc-meal.png",
      tint: "#FCF4DC",
    },
    {
      name: "物业服务",
      image: "/images/svc-property.png",
      tint: "#FDEFD8",
    },
    {
      name: "生活帮手",
      image: "/images/svc-helper.png",
      tint: "#E4F4F0",
    },
    {
      name: "社区活动",
      image: "/images/svc-event.png",
      tint: "#FBE6DC",
    },
    {
      name: "严选商城",
      image: "/images/svc-mall.png",
      tint: "#FDEFD8",
      badge: "敬请期待",
    },
    {
      name: "小区钱袋子",
      image: "/images/svc-wallet.png",
      tint: "#FCF4DC",
    },
  ],
  eG = [
    {
      title: "社区便民服务升级",
      subtitle: "家政、维修、代办一站式直达",
      image: "/images/banner-1.png",
      shade: "#C9740F",
    },
    {
      title: "健康小屋义诊活动",
      subtitle: "专业医生驻点，免费健康咨询",
      image: "/images/banner-2.png",
      shade: "#B8441A",
    },
    {
      title: "周末托管开放预约",
      subtitle: "单日托管，随约随托",
      image: "/images/banner-3.png",
      shade: "#C9740F",
    },
    {
      title: "适老营养餐上线",
      subtitle: "低油低盐，每日新鲜配送",
      image: "/images/banner-4.png",
      shade: "#A8740F",
    },
    {
      title: "生活帮手随时响应",
      subtitle: "管家上门，需求快速跟进",
      image: "/images/banner-5.png",
      shade: "#B8441A",
    },
  ],
  eU = [
    {
      title: "中秋邻里联欢会",
      period: "报名 09-05 至 09-26",
      status: "open",
      image: "/images/act-midautumn.png",
    },
    {
      title: "少儿阅读营",
      period: "报名 09-01 至 09-12",
      status: "open",
      image: "/images/act-reading.png",
    },
    {
      title: "邻里跳蚤市场",
      period: "报名 09-02 至 09-10",
      status: "open",
      image: "/images/act-market.png",
    },
    {
      title: "秋季健步走",
      period: "报名 09-08 至 09-23",
      status: "open",
      image: "/images/act-walk.png",
    },
  ],
  eZ = "垃圾分类新指南来了";
var eW = eW;
function C_eJ({ variant: e, className: s, onSelect: t }) {
  let l = (0, c.useRef)(null),
    a = (0, c.useRef)(0),
    n = (0, c.useRef)(!1),
    r = (0, c.useRef)(void 0),
    x = (0, c.useRef)(null),
    [d, o] = (0, c.useState)(0),
    m = (e) => {
      let s = l.current;
      s &&
        s.scrollTo({
          left: e * s.clientWidth,
          behavior: "smooth",
        });
    };
  (0, c.useEffect)(() => {
    let e = setInterval(() => {
      n.current || m((a.current + 1) % eG.length);
    }, 3500);
    return () => {
      (clearInterval(e), clearTimeout(r.current));
    };
  }, []);
  let p = () => {
      ((n.current = !0), clearTimeout(r.current));
    },
    h = () => {
      (clearTimeout(r.current),
        (r.current = setTimeout(() => {
          n.current = !1;
        }, 2500)));
    },
    u = () => {
      let e = l.current;
      if (x.current && e) {
        let s = e.scrollLeft - x.current.startLeft,
          t = Math.round(x.current.startLeft / e.clientWidth),
          l = Math.abs(s) > 40 ? t + Math.sign(s) : t;
        ((e.style.scrollSnapType = ""), m(Math.max(0, Math.min(eG.length - 1, l))));
      }
      ((x.current = null), h());
    };
  return (
    <section
      aria-roledescription="carousel"
      aria-label="活动推荐"
      className={eb("relative h-[130px] overflow-hidden rounded-[14px]", s)}
    >
      <div
        ref={l}
        onScroll={() => {
          let e = l.current;
          if (!e) return;
          let s = Math.round(e.scrollLeft / e.clientWidth);
          s !== a.current && ((a.current = s), o(s));
        }}
        onPointerDown={(e) => {
          (p(),
            "mouse" === e.pointerType &&
              l.current &&
              ((x.current = {
                startX: e.clientX,
                startLeft: l.current.scrollLeft,
              }),
              (l.current.style.scrollSnapType = "none"),
              e.currentTarget.setPointerCapture(e.pointerId)));
        }}
        onPointerMove={(e) => {
          x.current && l.current && (l.current.scrollLeft = x.current.startLeft - (e.clientX - x.current.startX));
        }}
        onPointerUp={u}
        onPointerCancel={u}
        onMouseEnter={p}
        onMouseLeave={h}
        className="no-scrollbar flex h-full cursor-grab snap-x snap-mandatory overflow-x-auto select-none active:cursor-grabbing"
      >
        {eG.map((s, l) => (
          <div
            key={s.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${l + 1} / ${eG.length}：${s.title}`}
            className="relative flex h-full w-full shrink-0 snap-start items-center px-5 text-surface"
          >
            <eW.Image
              src={s.image}
              alt=""
              fill={!0}
              sizes="343px"
              priority={0 === l}
              draggable={!1}
              className="pointer-events-none object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(90deg, ${s.shade}E6 0%, ${s.shade}99 45%, transparent 80%)`,
              }}
            />
            <div className="relative flex min-w-0 max-w-[62%] flex-col gap-1.5">
              <p className="text-lg leading-tight font-bold text-balance">{s.title}</p>
              <p className="text-[13px] leading-snug text-surface/90">{s.subtitle}</p>
              {"b" === e ? (
                <button
                  type="button"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => t?.(l)}
                  className="press mt-1 inline-flex w-fit items-center gap-0.5 rounded-full bg-surface/95 py-1 pr-2 pl-3 text-xs font-semibold text-ink"
                >
                  去看看
                  <C_e$ className="size-3.5" strokeWidth={1.8} />
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-4 bottom-3 flex items-center gap-1.5">
        {eG.map((e, s) => (
          <button
            key={e.title}
            type="button"
            aria-label={`切换到第 ${s + 1} 张`}
            aria-current={s === d}
            onClick={() => {
              (p(), m(s), h());
            }}
            className={eb(
              "h-1.5 rounded-full transition-all duration-300",
              s === d ? "w-4 bg-surface" : "w-1.5 bg-surface/45",
            )}
          />
        ))}
      </div>
    </section>
  );
}
let eQ = {
    健康小屋: "healthHome",
    托管服务: "trusteeship",
    健康膳食: "mealDetail",
    物业服务: "miniJump",
    生活帮手: "helperList",
    社区活动: "communityList",
    小区钱袋子: "moneyBag",
  },
  eX = ["helperList", "healthHome", "trusteeship", "meal", "escortList"];
function C_eY({ title: e, hint: s, action: t, onAction: l }) {
  return (
    <div className="flex items-end justify-between px-1">
      <div className="flex items-baseline gap-2">
        <h2 className="relative text-[17px] font-bold text-ink">
          {e}
          <span className="absolute -top-0.5 -right-2 size-1.5 rounded-full bg-danger" aria-hidden="true" />
        </h2>
        {s ? <span className="pl-1 text-xs text-ink-3">{s}</span> : null}
      </div>
      {t ? (
        <button
          type="button"
          onClick={l}
          className="press flex items-center rounded-full bg-surface/70 py-0.5 pr-1.5 pl-2.5 text-xs text-ink-2"
        >
          {t}
          <C_e$ className="size-3.5" strokeWidth={1.8} />
        </button>
      ) : null}
    </div>
  );
}
function eK() {
  let { go: e, toast: s } = o();
  return (
    <div className="no-scrollbar absolute inset-x-0 top-[46px] bottom-0 overflow-y-auto bg-surface pb-[84px]">
      <header className="bg-header-wash flex flex-col gap-4 px-5 pt-3 pb-12">
        <div className="flex items-start gap-3">
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <p className="text-[23px] leading-tight font-bold tracking-wide text-ink">
              你好，<span className="text-brand-deep">欢迎回家</span>
            </p>
            <button
              type="button"
              onClick={() => e("communitySwitch")}
              className="press flex w-fit items-center gap-1 rounded-full bg-surface/70 py-1 pr-2 pl-1.5 text-[13px] text-ink-2"
            >
              <C_eE className="size-3.5 text-brand-deep" strokeWidth={2.2} />
              阳光花园 · 3栋2单元
              <C_e$ className="size-3.5 text-ink-3" strokeWidth={1.8} />
            </button>
          </div>
          <button
            type="button"
            onClick={() => e("sysMsg")}
            aria-label="消息通知，3 条未读"
            className="press shadow-card relative mt-0.5 flex size-10 items-center justify-center rounded-full bg-surface"
          >
            <C_eH className="size-5 text-ink" strokeWidth={1.8} />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-semibold text-surface">
              3
            </span>
          </button>
        </div>
        <label className="shadow-card flex h-11 items-center gap-2 rounded-full bg-surface pr-1 pl-4">
          <C_eV className="size-[18px] shrink-0 text-brand-deep" strokeWidth={2} />
          <span className="sr-only">搜索</span>
          <input
            type="search"
            placeholder="搜服务、搜活动、找管家"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
          />
          <span className="bg-brand-gradient shrink-0 rounded-full px-4 py-1.5 text-[13px] font-semibold text-surface">
            搜索
          </span>
        </label>
      </header>
      <div className="relative -mt-8 flex flex-col gap-6 px-4">
        <section aria-label="社区服务" className="shadow-float flex flex-col gap-4 rounded-3xl bg-surface p-3 pt-4">
          <div className="grid grid-cols-4 gap-y-4">
            {eT.map((t) => (
              <button
                key={t.name}
                type="button"
                onClick={() => (eQ[t.name] ? e(eQ[t.name]) : s("严选商城敬请期待"))}
                className="press relative flex flex-col items-center gap-1.5"
              >
                <span className="bg-icon-glow shadow-card relative size-[52px] overflow-hidden rounded-full">
                  <eW.Image src={t.image} alt="" fill={!0} sizes="52px" className="scale-110 object-cover" />
                </span>
                <span className="text-xs whitespace-nowrap text-ink">{t.name}</span>
                {t.badge ? (
                  <span className="absolute -top-1.5 left-1/2 ml-1.5 rounded-full rounded-bl-none bg-danger px-1.5 py-0.5 text-[9px] leading-none whitespace-nowrap text-surface">
                    {t.badge}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => e("noticeList")}
            className="press bg-panel-wash flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left"
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-danger-soft">
              <C_eB className="size-3.5 text-danger" strokeWidth={2.2} />
            </span>
            <span className="min-w-0 flex-1 truncate text-[13px] text-ink">本周六小区供水检修，请提前储水…</span>
            <span className="shrink-0 text-[11px] text-ink-3 tabular-nums">09-04</span>
            <C_e$ className="size-3.5 shrink-0 text-ink-3" strokeWidth={1.8} />
          </button>
        </section>
        <div className="shadow-card overflow-hidden rounded-3xl">
          <C_eJ variant="b" onSelect={(s) => e(eX[s])} />
        </div>
        <section className="bg-panel-wash -mx-1 flex flex-col gap-3 rounded-[28px] px-3 pt-4 pb-3">
          <C_eY title="社区活动" hint="邻里一起来" action="全部" onAction={() => e("communityList")} />
          <ul className="flex flex-col gap-2.5">
            {eU.map((s, t) => (
              <li key={s.title}>
                <button
                  type="button"
                  onClick={() => e("activityDetail")}
                  className="press shadow-card flex w-full items-center gap-3 rounded-2xl bg-surface p-2.5 text-left"
                >
                  <span className="relative h-[68px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-brand-soft">
                    <eW.Image src={s.image} alt={s.title} fill={!0} sizes="88px" className="object-cover" />
                    {0 === t ? (
                      <span className="absolute top-0 left-0 flex items-center gap-0.5 rounded-br-lg bg-danger px-1.5 py-0.5 text-[10px] font-semibold text-surface">
                        <C_eF className="size-3" strokeWidth={2.2} />
                        热门
                      </span>
                    ) : null}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <span className="truncate text-[15px] font-semibold text-ink">{s.title}</span>
                    <span className="flex w-fit items-center gap-1 rounded-full bg-brand-mist px-2 py-0.5 text-xs text-ink-2 tabular-nums">
                      <C_eq className="size-3.5 text-brand-deep" strokeWidth={1.8} />
                      {s.period}
                    </span>
                  </span>
                  <span
                    className={
                      0 === t
                        ? "bg-brand-gradient shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-surface"
                        : "shrink-0 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep"
                    }
                  >
                    报名
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col gap-3">
          <C_eY title="精彩内容" hint="生活小贴士" action="更多" onAction={() => e("featuredList")} />
          <button
            type="button"
            onClick={() => e("articleDetail")}
            className="press shadow-float relative h-44 w-full overflow-hidden rounded-3xl bg-brand-soft text-left"
          >
            <eW.Image src="/images/article-recycle.png" alt={eZ} fill={!0} sizes="343px" className="object-cover" />
            <span
              className="absolute inset-0 bg-gradient-to-t from-[#3a230c]/75 via-[#3a230c]/10 to-transparent"
              aria-hidden="true"
            />
            <span className="absolute top-3 left-3 rounded-full bg-surface/90 px-2 py-0.5 text-[11px] font-semibold text-brand-deep backdrop-blur">
              物业指南
            </span>
            <span className="absolute inset-x-4 bottom-3.5 flex flex-col gap-1">
              <span className="truncate text-base font-bold text-surface">{eZ}</span>
              <span className="text-xs text-surface/85">09-03 · 物业服务中心</span>
            </span>
          </button>
        </section>
        <p className="py-2 text-center text-xs text-ink-3">顾好家 · 邻里有温度</p>
      </div>
    </div>
  );
}
let C_e0 = ew("building-2", [
    [
      "path",
      {
        d: "M10 12h4",
        key: "a56b0p",
      },
    ],
    [
      "path",
      {
        d: "M10 8h4",
        key: "1sr2af",
      },
    ],
    [
      "path",
      {
        d: "M14 21v-3a2 2 0 0 0-4 0v3",
        key: "1rgiei",
      },
    ],
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2",
      },
    ],
    [
      "path",
      {
        d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
        key: "16ra0t",
      },
    ],
  ]),
  C_e1 = ew("camera", [
    [
      "path",
      {
        d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
        key: "18u6gg",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "13",
        r: "3",
        key: "1vg3eu",
      },
    ],
  ]),
  C_e2 = ew("check", [
    [
      "path",
      {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c",
      },
    ],
  ]),
  C_e3 = ew("circle-alert", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh",
      },
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90",
      },
    ],
  ]),
  C_e5 = ew("eye", [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd",
      },
    ],
  ]),
  C_e4 = ew("eye-off", [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    [
      "path",
      {
        d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
        key: "151rxh",
      },
    ],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    [
      "path",
      {
        d: "m2 2 20 20",
        key: "1ooewy",
      },
    ],
  ]),
  C_e6 = ew("message-circle", [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ]),
  C_e8 = ew("plus", [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h",
      },
    ],
    [
      "path",
      {
        d: "M12 5v14",
        key: "s699le",
      },
    ],
  ]),
  C_e9 = ew("smartphone", [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    [
      "path",
      {
        d: "M12 18h.01",
        key: "mhygvu",
      },
    ],
  ]),
  C_e7 = ew("user-round", [
    [
      "circle",
      {
        cx: "12",
        cy: "8",
        r: "5",
        key: "1hypcn",
      },
    ],
    [
      "path",
      {
        d: "M20 21a8 8 0 0 0-16 0",
        key: "rfgkzh",
      },
    ],
  ]),
  C_se = ew("chevron-left", [
    [
      "path",
      {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3",
      },
    ],
  ]),
  ss = ew("image-plus", [
    [
      "path",
      {
        d: "M16 5h6",
        key: "1vod17",
      },
    ],
    [
      "path",
      {
        d: "M19 2v6",
        key: "4bpg5p",
      },
    ],
    [
      "path",
      {
        d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
        key: "1ue2ih",
      },
    ],
    [
      "path",
      {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
        key: "1xmnt7",
      },
    ],
    [
      "circle",
      {
        cx: "9",
        cy: "9",
        r: "2",
        key: "af1f0g",
      },
    ],
  ]),
  C_st = ew("info", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "path",
      {
        d: "M12 16v-4",
        key: "1dtifu",
      },
    ],
    [
      "path",
      {
        d: "M12 8h.01",
        key: "e9boi3",
      },
    ],
  ]),
  C_sl = ew("minus", [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h",
      },
    ],
  ]),
  C_sa = ew("star", [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ]),
  C_sn = ew("video", [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      {
        x: "2",
        y: "6",
        width: "14",
        height: "12",
        rx: "2",
        key: "158x01",
      },
    ],
  ]);
function C_sr({ title: e, right: s, onRight: t, noBack: l }) {
  let { back: a } = o();
  return (
    <div className="relative z-10 flex h-11 shrink-0 items-center justify-between px-3">
      {l ? (
        <span className="size-9" />
      ) : (
        <button
          type="button"
          onClick={a}
          aria-label="返回"
          className="press shadow-card flex size-9 items-center justify-center rounded-full bg-surface"
        >
          <C_se className="size-5 text-ink" strokeWidth={2} />
        </button>
      )}
      <h1 className="absolute left-1/2 -translate-x-1/2 text-[17px] font-bold text-ink">{e}</h1>
      {s ? (
        <button type="button" onClick={t} className="press min-w-9 text-right text-sm font-semibold text-brand-deep">
          {s}
        </button>
      ) : (
        <span className="size-9" />
      )}
    </div>
  );
}
function C_si({ title: e, nav: s, children: t, bottom: l, className: a, tab: n }) {
  return (
    <div className="absolute inset-x-0 top-[46px] bottom-0 flex flex-col">
      {s ?? (void 0 !== e ? <C_sr title={e} /> : null)}
      <div
        className={eb("no-scrollbar flex flex-1 flex-col gap-3 overflow-y-auto px-4 pt-2 pb-6", n && "pb-[92px]", a)}
      >
        {t}
      </div>
      {l ? (
        <div className="shadow-dock relative z-10 flex items-center gap-3 rounded-t-[22px] bg-surface px-4 pt-3 pb-7">
          {l}
        </div>
      ) : null}
    </div>
  );
}
function C_sc({ children: e, className: s, onClick: t, as: l }) {
  let a = eb("shadow-card rounded-[20px] bg-surface p-4 text-left", t && "press w-full", s);
  return t || "button" === l ? (
    <button type="button" onClick={t} className={a}>
      {e}
    </button>
  ) : (
    <div className={a}>{e}</div>
  );
}
function C_sx({ title: e, action: s, onAction: t }) {
  return (
    <div className="flex items-center justify-between px-1 pt-1">
      <h2 className="relative text-[15px] font-bold text-ink">
        {e}
        <span className="absolute -top-0.5 -right-2 size-1.5 rounded-full bg-danger" aria-hidden="true" />
      </h2>
      {s ? (
        <button type="button" onClick={t} className="press flex items-center text-xs text-ink-2">
          {s}
          <C_e$ className="size-3.5" strokeWidth={1.8} />
        </button>
      ) : null}
    </div>
  );
}
function C_sd({ children: e, extra: s }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h3 className="flex items-center gap-2 text-[15px] font-bold text-ink">
        <span className="h-3.5 w-1 rounded-full bg-brand" aria-hidden="true" />
        {e}
      </h3>
      {s}
    </div>
  );
}
function C_so({ label: e, value: s, icon: t, desc: l, onClick: a, arrow: n, strong: r }) {
  let c = (
      <>
        {t ? (
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-deep">
            {t}
          </span>
        ) : null}
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className={eb("text-sm text-ink", r && "font-semibold")}>{e}</span>
          {l ? <span className="text-xs leading-relaxed text-ink-3">{l}</span> : null}
        </span>
        {void 0 !== s ? <span className="shrink-0 text-right text-sm text-ink-2 tabular-nums">{s}</span> : null}
        {n || a ? <C_e$ className="size-4 shrink-0 text-ink-3" strokeWidth={1.8} /> : null}
      </>
    ),
    x = "flex w-full items-center gap-3 py-2.5 text-left";
  return a ? (
    <button type="button" onClick={a} className={eb(x, "press")}>
      {c}
    </button>
  ) : (
    <div className={x}>{c}</div>
  );
}
function C_sm({ k: e, v: s, accent: t }) {
  return (
    <div className="flex items-start justify-between gap-4 py-1.5 text-sm">
      <span className="shrink-0 text-ink-2">{e}</span>
      <span className={eb("text-right text-ink tabular-nums", t && "font-bold text-brand-deep")}>{s}</span>
    </div>
  );
}
function C_sp({ children: e, variant: s = "primary", size: t = "lg", block: l, onClick: a, className: n }) {
  return (
    <button
      type="button"
      onClick={a}
      className={eb(
        "press inline-flex flex-none items-center justify-center gap-1.5 rounded-full font-semibold whitespace-nowrap",
        "lg" === t && "h-11 px-6 text-[15px]",
        "md" === t && "h-10 px-5 text-sm",
        "sm" === t && "h-8 px-3.5 text-xs",
        "primary" === s && "bg-brand-gradient shadow-soft text-surface",
        "soft" === s && "bg-brand-soft text-brand-deep",
        "ghost" === s && "bg-fill text-ink-2",
        "outline" === s && "bg-surface text-brand-deep ring-1 ring-brand/60",
        "danger" === s && "bg-danger-soft text-danger",
        l && "w-full min-w-0 shrink",
        n,
      )}
    >
      {e}
    </button>
  );
}
function C_sh({ tone: e = "brand", children: s, className: t }) {
  return (
    <span
      className={eb(
        "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap",
        "brand" === e && "bg-brand-soft text-brand-deep",
        "red" === e && "bg-danger-soft text-danger",
        "teal" === e && "bg-success-soft text-success",
        "gray" === e && "bg-tag-muted text-ink-3",
        "warm" === e && "bg-warm-soft text-warm-ink",
        t,
      )}
    >
      {s}
    </span>
  );
}
function C_su({
  label: e,
  placeholder: s,
  defaultValue: t,
  type: l = "text",
  suffix: a,
  textarea: n,
  required: r,
  readOnly: c,
  onClick: x,
}) {
  return (
    <label className="flex flex-col gap-1.5">
      {e ? (
        <span className="text-[13px] font-medium text-ink-2">
          {r ? <span className="mr-0.5 text-danger">*</span> : null}
          {e}
        </span>
      ) : null}
      <span className="flex min-h-11 items-center gap-2 rounded-2xl bg-fill px-3.5" onClick={x}>
        {n ? (
          <textarea
            rows={3}
            placeholder={s}
            defaultValue={t}
            className="w-full resize-none bg-transparent py-2.5 text-sm leading-relaxed text-ink outline-none placeholder:text-ink-3"
          />
        ) : (
          <input
            type={l}
            placeholder={s}
            defaultValue={t}
            readOnly={c}
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
          />
        )}
        {a}
      </span>
    </label>
  );
}
function C_sf({ label: e, value: s, placeholder: t = "请选择", required: l, onClick: a }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[13px] font-medium text-ink-2">
        {l ? <span className="mr-0.5 text-danger">*</span> : null}
        {e}
      </span>
      <button
        type="button"
        onClick={a}
        aria-haspopup={a ? "dialog" : void 0}
        className="press flex h-11 min-w-0 items-center justify-between gap-2 rounded-2xl bg-fill px-3.5 text-sm"
      >
        <span className={eb("truncate", s ? "text-ink" : "text-ink-3")}>{s ?? t}</span>
        <C_e$ className="size-4 shrink-0 text-ink-3" strokeWidth={1.8} />
      </button>
    </div>
  );
}
function C_sPicker({ title: e, options: s, value: t, onSelect: l, onClose: a, grid: r }) {
  return (
    <div className="absolute inset-0 z-40 flex flex-col justify-end">
      <button type="button" aria-label="关闭" onClick={a} className="absolute inset-0 bg-shell/45" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={e}
        className="relative flex min-h-[45%] max-h-[70%] flex-col rounded-t-[28px] bg-surface pb-6 shadow-float"
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <button type="button" onClick={a} className="press text-sm text-ink-3">
            取消
          </button>
          <p className="text-base font-bold text-ink">{e}</p>
          <span className="w-7" aria-hidden="true" />
        </div>
  <ul className={eb("overflow-y-auto", r ? "grid grid-cols-3 gap-2.5 px-5 pt-1" : "flex flex-col px-3")}>
  {s.map((s) => {
  let n = s === t;
  return (
  <li key={s}>
  <button
  type="button"
  onClick={() => l(s)}
  aria-pressed={n}
  className={eb(
  r
  ? "press flex w-full items-center justify-center rounded-2xl px-2 py-3 text-center text-[14px] tabular-nums"
  : "press flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[15px]",
  n
  ? "bg-brand-soft font-semibold text-brand-deep"
  : r
  ? "bg-fill text-ink"
  : "text-ink",
  )}
  >
  {s}
  {n && !r ? <span className="size-2 rounded-full bg-brand" aria-hidden="true" /> : null}
  </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
function C_sj({ items: e, value: s, onChange: t, className: l }) {
  return (
    <div role="tablist" className={eb("flex gap-1 rounded-full bg-surface/80 p-1 shadow-card", l)}>
      {e.map((e) => (
        <button
          key={e}
          type="button"
          role="tab"
          aria-selected={e === s}
          onClick={() => t(e)}
          className={eb(
            "press flex-1 rounded-full px-2 py-1.5 text-[13px] whitespace-nowrap transition-colors",
            e === s ? "bg-brand-gradient font-semibold text-surface" : "text-ink-2",
          )}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
function C_sb({ items: e, value: s, onChange: t }) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
      {e.map((e) => (
        <button
          key={e}
          type="button"
          onClick={() => t(e)}
          className={eb(
            "press shrink-0 rounded-full px-3.5 py-1.5 text-[13px] whitespace-nowrap",
            e === s ? "bg-ink font-semibold text-surface" : "bg-surface text-ink-2 shadow-card",
          )}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
function C_sg({ defaultOn: e = !1, label: s, onChange: t }) {
  let [l, a] = (0, c.useState)(e);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={l}
      aria-label={s}
      onClick={() => {
        (a(!l), t?.(!l));
      }}
      className={eb("relative h-7 w-12 shrink-0 rounded-full transition-colors", l ? "bg-brand" : "bg-ink-3/45")}
    >
      <span
        className={eb(
          "absolute top-1 size-5 rounded-full bg-surface shadow-card transition-all",
          l ? "left-6" : "left-1",
        )}
      />
    </button>
  );
}
function C_sN({ min: e = 1, max: s = 5, initial: t = 1 }) {
  let [l, a] = (0, c.useState)(t);
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="减少"
        onClick={() => a(Math.max(e, l - 1))}
        className="press flex size-8 items-center justify-center rounded-full bg-fill text-ink-2"
      >
        <C_sl className="size-4" />
      </button>
      <span className="w-5 text-center text-base font-bold text-ink tabular-nums">{l}</span>
      <button
        type="button"
        aria-label="增加"
        onClick={() => a(Math.min(s, l + 1))}
        className="press bg-brand-gradient flex size-8 items-center justify-center rounded-full text-surface"
      >
        <C_e8 className="size-4" />
      </button>
    </div>
  );
}
function C_sk({ kind: e = "image", max: s, hint: t }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-[13px]">
        <span className="font-medium text-ink-2">{"image" === e ? "图片上传" : "视频上传"}</span>
        <span className="text-ink-3 tabular-nums">0/{s}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="press flex size-20 flex-col items-center justify-center gap-1 rounded-2xl bg-brand-mist text-brand-deep shadow-card"
        >
          {(0, __jsxRuntime.jsx)("image" === e ? ss : C_sn, {
            className: "size-6",
            strokeWidth: 1.6,
          })}
          <span className="text-[11px]">{"image" === e ? "添加图片" : "添加视频"}</span>
        </button>
        <p className="flex-1 text-xs leading-relaxed text-ink-3">{t}</p>
      </div>
    </div>
  );
}
let sy = [
  ["周五", "05"],
  ["周六", "06"],
  ["周日", "07"],
  ["周一", "08"],
  ["周二", "09"],
  ["周三", "10"],
  ["周四", "11"],
];
function C_sv({ label: e = "服务日期（仅可选择未来 7 天内）" }) {
  let [s, t] = (0, c.useState)(0);
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[13px] font-medium text-ink-2">{e}</span>
  <div className="flex gap-1.5">
  {sy.map(([e, l], a) => (
  <button
  key={l}
  type="button"
  onClick={() => t(a)}
  className={eb(
  "press flex h-16 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl",
              a === s ? "bg-brand-gradient shadow-soft text-surface" : "bg-fill text-ink-2",
            )}
          >
            <span className="text-[11px]">{e}</span>
            <span className="text-lg font-bold tabular-nums">{l}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
function C_sw({ items: e, value: s, onChange: t, render: l }) {
  return (
    <div className="flex gap-2.5">
      {e.map((e) => (
        <button
          key={e}
          type="button"
          onClick={() => t(e)}
          className={eb(
            "press relative flex flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl py-3 text-sm",
            e === s ? "bg-brand-soft font-semibold text-brand-ink ring-2 ring-brand" : "bg-fill text-ink-2",
          )}
        >
          {l ? l(e) : e}
          {e === s ? (
            <span className="absolute top-0 right-0 flex size-5 items-center justify-center rounded-tr-2xl rounded-bl-xl bg-brand text-surface">
              <C_e2 className="size-3" strokeWidth={3} />
            </span>
          ) : null}
        </button>
      ))}
    </div>
  );
}
function C_sz({ children: e, tone: s = "brand" }) {
  return (
    <div
      className={eb(
        "flex gap-2 rounded-2xl px-3.5 py-3 text-xs leading-relaxed",
        "brand" === s ? "bg-brand-mist text-ink-2" : "bg-danger-soft text-danger",
      )}
    >
      <C_st className={eb("mt-0.5 size-3.5 shrink-0", "brand" === s ? "text-brand-deep" : "text-danger")} />
      <div className="flex flex-col gap-0.5">{e}</div>
    </div>
  );
}
function C_sC({ children: e }) {
  return <p className="px-4 py-2 text-center text-xs leading-relaxed text-ink-3">{e}</p>;
}
function C_sM({ n: e = 5, size: s = "sm" }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${e} 星`}>
      {Array.from({
        length: 5,
      }).map((t, l) => (
        <C_sa
          key={l}
          className={eb(
            "sm" === s ? "size-3" : "size-8",
            l < e ? "fill-brand text-brand" : "fill-tag-muted text-tag-muted",
          )}
        />
      ))}
    </span>
  );
}
function C_sS({ name: e, size: s = 40, tone: t = "brand" }) {
  return (
    <span
      className={eb(
        "flex shrink-0 items-center justify-center rounded-full font-bold",
        "brand" === t && "bg-brand-gradient text-surface",
        "teal" === t && "bg-success-soft text-success",
        "warm" === t && "bg-warm-soft text-warm-ink",
      )}
      style={{
        width: s,
        height: s,
        fontSize: 0.38 * s,
      }}
    >
      {e.slice(0, 1)}
    </span>
  );
}
function C_sP({ value: e, size: s = "md", from: t }) {
  return (
    <span className="flex items-baseline font-bold text-danger tabular-nums">
      <span className={"lg" === s ? "text-base" : "text-xs"}>¥</span>
      <span
        className={eb("sm" === s && "text-base", "md" === s && "text-xl", "lg" === s && "text-[28px] leading-none")}
      >
        {e}
      </span>
      {t ? <span className="ml-0.5 text-xs font-normal text-ink-3">起</span> : null}
    </span>
  );
}
function C_s_({ items: e }) {
  return (
    <ol className="flex flex-col">
      {e.map((s, t) => (
        <li key={s.title} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span
              className={eb(
                "mt-1 flex size-4 shrink-0 items-center justify-center rounded-full",
                "done" === s.state && "bg-brand text-surface",
                "doing" === s.state && "bg-surface ring-4 ring-brand/30",
                "todo" === s.state && "bg-tag-muted",
              )}
            >
              {"done" === s.state ? <C_e2 className="size-2.5" strokeWidth={3.5} /> : null}
              {"doing" === s.state ? <span className="size-2 rounded-full bg-brand" /> : null}
            </span>
            {t < e.length - 1 ? <span className="my-1 w-0.5 flex-1 rounded-full bg-brand-soft" /> : null}
          </div>
          <div className="flex flex-1 flex-col gap-0.5 pb-4">
            <div className="flex items-center justify-between gap-2">
              <span className={eb("text-sm", "todo" === s.state ? "text-ink-3" : "font-semibold text-ink")}>
                {s.title}
              </span>
              {s.time ? <span className="text-xs text-ink-3 tabular-nums">{s.time}</span> : null}
            </div>
            {s.desc ? <span className="text-xs leading-relaxed whitespace-pre-line text-ink-2">{s.desc}</span> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
function C_sD() {
  let [e, s] = (0, c.useState)(!1),
    { go: t } = o();
  return (
    <div className="flex items-start gap-2 text-xs leading-relaxed text-ink-2">
      <button
        type="button"
        role="checkbox"
        aria-checked={e}
        aria-label="同意协议"
        onClick={() => s(!e)}
        className={eb(
          "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
          e ? "bg-brand text-surface" : "bg-surface ring-1 ring-ink-3",
        )}
      >
        {e ? <C_e2 className="size-2.5" strokeWidth={3.5} /> : null}
      </button>
      <span>
        我已阅读并同意
        <button type="button" onClick={() => t("agreement")} className="text-brand-deep">
          《用户协议》
        </button>
        和
        <button type="button" onClick={() => t("privacy")} className="text-brand-deep">
          《隐私政策》
        </button>
      </span>
    </div>
  );
}
function C_sR({ placeholder: e = "请输入验证码" }) {
  let [s, t] = (0, c.useState)(0);
  return (
    <C_su
      placeholder={e}
      type="tel"
      suffix={
        <button
          type="button"
          onClick={() => {
            if (s > 0) return;
            t(60);
            let e = setInterval(() => {
              t((s) => (s <= 1 ? (clearInterval(e), 0) : s - 1));
            }, 1e3);
          }}
          className={eb(
            "press shrink-0 text-[13px] font-semibold whitespace-nowrap",
            s ? "text-ink-3" : "text-brand-deep",
          )}
        >
          {s ? `${s}s 后重新获取` : "获取验证码"}
        </button>
      }
    />
  );
}
function C_sL({ children: e, onClose: s }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center px-8">
      <button type="button" aria-label="关闭" onClick={s} className="absolute inset-0 bg-shell/45" />
      <div role="dialog" className="relative flex w-full flex-col gap-4 rounded-[28px] bg-surface p-6">
        {e}
      </div>
    </div>
  );
}
function C_sI({ sub: e = "社区服务，从家开始" }) {
  return (
    <div className="flex flex-col items-center gap-3 pt-6 pb-4">
      <span className="bg-brand-gradient shadow-float flex size-20 items-center justify-center rounded-[26px] text-surface">
        <C_e0 className="size-10" strokeWidth={1.6} />
      </span>
      <p className="text-2xl font-bold tracking-wide text-ink">顾好家</p>
      <p className="text-sm text-ink-2">{e}</p>
    </div>
  );
}
function sO() {
  let { go: e, reset: s } = o(),
    [t, l] = (0, c.useState)("验证码登录"),
    [a, n] = (0, c.useState)(!1);
  return (
    <C_si className="bg-sub-wash -mx-0 gap-5 px-6" nav={<C_sr noBack={!0} />}>
      <C_sI />
      <C_sj items={["验证码登录", "密码���录"]} value={t} onChange={l} />
      <div className="flex flex-col gap-3">
        <C_su placeholder="请输入手机号" type="tel" suffix={<C_e9 className="size-4 text-ink-3" />} />
        {"验证码登录" === t ? (
          <C_sR />
        ) : (
          <C_su
            placeholder="请输入密码"
            type={a ? "text" : "password"}
            suffix={
              <button type="button" aria-label="显示密码" onClick={() => n(!a)} className="text-ink-3">
                {a ? <C_e5 className="size-4" /> : <C_e4 className="size-4" />}
              </button>
            }
          />
        )}
        {"密码登录" === t ? (
          <button type="button" onClick={() => e("findPwd")} className="press self-end text-xs text-brand-deep">
            忘记密码？
          </button>
        ) : null}
      </div>
      <C_sD />
      <C_sp block={!0} onClick={() => e("regProfile")}>
        登录
      </C_sp>
      <div className="flex flex-col items-center gap-3 pt-4">
        <span className="flex w-full items-center gap-3 text-xs text-ink-3">
          <span className="h-px flex-1 bg-hairline" />
          其他登录方式
          <span className="h-px flex-1 bg-hairline" />
        </span>
        <button type="button" onClick={() => e("wechatLogin")} className="press flex flex-col items-center gap-1.5">
          <span className="shadow-card flex size-12 items-center justify-center rounded-full bg-success-soft text-success">
            <C_e6 className="size-6" />
          </span>
          <span className="text-xs text-ink-2">微信快捷登录</span>
        </button>
      </div>
      <C_sC>未注册的手机号验证后将自动为你创建账号</C_sC>
      <button type="button" onClick={() => s("home")} className="press text-center text-xs text-ink-3">
        先逛逛
      </button>
    </C_si>
  );
}
let sA = [
  {
    name: "阳光花园",
    room: "3栋2单元-1802",
    date: "08-20",
    status: "ok",
  },
  {
    name: "玫瑰新城",
    room: "5栋1单元-0903",
    date: "09-01",
    status: "pending",
  },
  {
    name: "江畔雅苑",
    room: "2栋-1102",
    date: "08-28",
    status: "reject",
    reason: "房号信息与物业登记不一致",
    to: "certReject",
  },
  {
    name: "翠湖小区",
    room: "6栋1单元-0501",
    date: "09-02",
    status: "reject",
    reason: "业主姓名与产权人不一致",
    to: "certReject2",
  },
];
function sW(e) {
  return function () {
    let { go: s } = o();
    return (
      <C_si
        title="驳回原因"
        className="bg-sub-wash"
        bottom={
          <>
            <C_sp variant="soft" onClick={() => s("butler")}>
              联系楼栋管家
            </C_sp>
            <C_sp block={!0} onClick={() => s("certify")}>
              修改并重新提交
            </C_sp>
          </>
        }
      >
        <div className="flex flex-col gap-2 rounded-[24px] bg-danger-soft p-5">
          <p className="flex items-center gap-2 text-base font-bold text-danger">
            <C_e3 className="size-5" />
            认证审核未通过
          </p>
          <p className="text-[13px] leading-relaxed text-ink-2">
            {"该认证已累计被驳回 "}
            <b className="text-danger">2</b>
            {" 次，请在核对信息后重新提交，具体驳回原因见下方记录。"}
          </p>
        </div>
        <C_sc>
          <C_sd extra={<C_sh tone="red">已驳回</C_sh>}>被驳回的认证</C_sd>
          <p className="mb-2 text-[15px] font-semibold text-ink">{e.name}</p>
          <C_sm k="业主姓名" v={e.owner} />
          <C_sm k="联系电话" v={e.phone} />
          <C_sm k="提交时间" v={e.submit} />
          <C_sm k="审核时间" v={e.audit} />
        </C_sc>
        <C_sc>
          <C_sd>驳回记录</C_sd>
          <C_s_
            items={e.logs.map((e, s) => ({
              title: `第 ${e.n} 次驳回 \xb7 ${e.title}`,
              desc: `${e.desc}
审核人：${e.who}`,
              time: e.time,
              state: 0 === s ? "doing" : "done",
            }))}
          />
        </C_sc>
        <C_sC>重新提交后由物业后台重新审核，结果会通过消息通知你</C_sC>
      </C_si>
    );
  };
}
let sH = {
  welcome: sO,
  login: sO,
  regProfile: function () {
    let { reset: e } = o();
    return (
      <C_si
        title="完善资料"
        className="bg-sub-wash gap-4"
        bottom={
          <C_sp block={!0} onClick={() => e("home")}>
            完成
          </C_sp>
        }
      >
        <p className="px-1 text-sm leading-relaxed text-ink-2">完善基本信息，让邻里与楼栋管家更好地认识你</p>
        <C_sc className="flex flex-col items-center gap-2 py-6">
          <button type="button" className="press relative">
            <span className="flex size-20 items-center justify-center rounded-full bg-brand-soft text-brand-deep">
              <C_e7 className="size-9" strokeWidth={1.6} />
            </span>
            <span className="bg-brand-gradient absolute right-0 bottom-0 flex size-7 items-center justify-center rounded-full text-surface ring-2 ring-surface">
              <C_e1 className="size-3.5" />
            </span>
          </button>
          <span className="text-xs text-ink-3">点击上传头像</span>
        </C_sc>
        <C_sc className="flex flex-col gap-4">
          <C_su label="昵称" placeholder="请输入昵称" required={!0} />
          <C_sf label="所在小区" placeholder="请选择小区" required={!0} />
        </C_sc>
      </C_si>
    );
  },
  wechatBind: function () {
    let { reset: e } = o();
    return (
      <C_si title="绑定手机号码" className="bg-sub-wash gap-5 px-6">
        <div className="flex flex-col items-center gap-3 pt-4 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-success-soft text-success">
            <C_e2 className="size-8" strokeWidth={2.4} />
          </span>
          <p className="text-sm leading-relaxed text-ink-2">微信授权登录成功，请绑定手机号码完成账号注册</p>
        </div>
        <div className="flex flex-col gap-3">
          <C_su placeholder="请输入手机号" type="tel" />
          <C_sR />
        </div>
        <C_sD />
        <C_sp block={!0} onClick={() => e("home")}>
          提交账号注册
        </C_sp>
        <C_sC>验证码由阿里云短信服务下发，点击获取验证码后 60 秒可重新获取</C_sC>
      </C_si>
    );
  },
  findPwd: function () {
    let { back: e, toast: s } = o(),
      [t, l] = (0, c.useState)(1);
    return (
      <C_si title="找回密码" className="bg-sub-wash gap-5 px-6">
        <div className="flex items-center gap-2 pt-2">
          {["验证手机号", "设置新密码"].map((e, s) => (
            <div key={e} className="flex flex-1 items-center gap-2">
              <span
                className={eb(
                  "flex size-6 items-center justify-center rounded-full text-xs font-bold",
                  t > s ? "bg-brand-gradient text-surface" : "bg-tag-muted text-ink-3",
                )}
              >
                {s + 1}
              </span>
              <span className={eb("text-sm", t > s ? "font-semibold text-ink" : "text-ink-3")}>{e}</span>
              {0 === s ? <span className="h-0.5 flex-1 rounded-full bg-brand-soft" /> : null}
            </div>
          ))}
        </div>
        {1 === t ? (
          <div className="flex flex-col gap-3">
            <C_su placeholder="请输入注册手机号" type="tel" />
            <C_sR />
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <C_su placeholder="请输入新密码（6-20 位）" type="password" />
            <C_su placeholder="请再次输入新密码" type="password" />
          </div>
        )}
        <C_sp
          block={!0}
          onClick={() => {
            1 === t ? l(2) : (s("密码已重置，请重新登录"), e());
          }}
        >
          {1 === t ? "下一步" : "确认修改"}
        </C_sp>
        <C_sC>验证码将发送至注册手机号，5 分钟内有效</C_sC>
      </C_si>
    );
  },
  wechatLogin: function () {
    let { go: e, back: s } = o();
    return (
      <C_si title="微信授权登录" className="bg-sub-wash items-center gap-6 px-6 text-center">
        <div className="flex flex-col items-center gap-4 pt-10">
          <span className="shadow-float flex size-24 items-center justify-center rounded-full bg-success-soft text-success">
            <C_e6 className="size-12" strokeWidth={1.6} />
          </span>
          <p className="text-xl font-bold text-ink">微信授权登录</p>
          <p className="text-sm leading-relaxed text-ink-2">
            正在使用微信账号登录顾好家
            <br />
            请确认授权以继续
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 pt-4">
          <C_sp block={!0} onClick={() => e("wechatBind")}>
            授权并登录
          </C_sp>
          <C_sp block={!0} variant="ghost" onClick={s}>
            返回登录
          </C_sp>
          <button type="button" onClick={() => e("wechatFail")} className="press text-xs text-brand-deep">
            模拟：未绑定账号
          </button>
        </div>
        <C_sC>若该微信未绑定已注册账号，将提示暂未绑定账号无法登录</C_sC>
      </C_si>
    );
  },
  wechatFail: function () {
    let { go: e } = o();
    return (
      <C_si title="微信登录" className="bg-sub-wash items-center gap-6 px-6 text-center">
        <div className="flex flex-col items-center gap-4 pt-10">
          <span className="flex size-24 items-center justify-center rounded-full bg-danger-soft text-danger">
            <C_e3 className="size-12" strokeWidth={1.6} />
          </span>
          <p className="text-xl font-bold text-ink">暂未绑定账号</p>
          <p className="text-sm leading-relaxed text-ink-2">
            该微信未绑定任何已注册账号
            <br />
            无法使用微信授权登录
          </p>
        </div>
        <C_sp block={!0} onClick={() => e("welcome")}>
          使用手机号登录
        </C_sp>
        <C_sC>可在绑定弹窗中授权绑定已有账号，即可使用微信授权登录；也可后续在个人中心绑定</C_sC>
      </C_si>
    );
  },
  certify: function () {
    let { go: e, toast: s } = o(),
      [t, l] = (0, c.useState)(null),
      [a, n] = (0, c.useState)(null),
      [r, i] = (0, c.useState)(null),
      [d, x] = (0, c.useState)(null),
      p = {
        阳光花园: ["1栋", "2栋", "3栋", "5栋", "6栋"],
        翠湖雅苑: ["A座", "B座", "C座"],
        锦绣家园: ["1栋", "2栋", "3栋", "4栋"],
        滨江名邸: ["8栋", "9栋", "10栋"],
      },
      m = ["1单元 101", "1单元 102", "1单元 201", "1单元 202", "2单元 301", "2单元 302", "2单元 401", "2单元 402"],
      u =
        d === "community"
          ? { title: "选择小区", options: Object.keys(p), value: t }
          : d === "building"
            ? { title: "选择楼栋", options: p[t] ?? [], value: a, grid: !0 }
            : d === "room"
              ? { title: "选择房号", options: m, value: r, grid: !0 }
              : null;
    function h(e) {
      if (d === "community") {
        if (e !== t) (n(null), i(null));
        l(e);
      } else if (d === "building") {
        if (e !== a) i(null);
        n(e);
      } else i(e);
      x(null);
    }
    return (
      <C_si
        title="房屋认证"
        className="bg-sub-wash"
        bottom={
          <C_sp
            block={!0}
            onClick={() => {
              (s("已提交，等待物业审核"), e("certList"));
            }}
          >
            提交认证
          </C_sp>
        }
      >
        <div className="bg-hero-wash shadow-float flex flex-col gap-3 rounded-[24px] p-5 text-surface">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold">业主认证流程</p>
            <span className="rounded-full bg-surface/25 px-2.5 py-0.5 text-xs">约 1 个工作日</span>
          </div>
          {["依次选择小区、楼栋与房号", "补充业主姓名与联系号码", "提交后由物业后台审核，结果会通知你"].map((e, s) => (
            <p key={e} className="flex items-center gap-2.5 text-[13px]">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-surface text-[11px] font-bold text-brand-deep">
                {s + 1}
              </span>
              {e}
            </p>
          ))}
        </div>
        <C_sz>多个小区可分别认证，互不影响使用</C_sz>
        <C_sc className="flex flex-col gap-4">
          <C_sd>房屋信息</C_sd>
          <C_sf label="小区" required={!0} value={t ?? void 0} onClick={() => x("community")} />
          <div className="grid grid-cols-2 gap-3">
            <C_sf
              label="楼栋"
              required={!0}
              value={a ?? void 0}
              onClick={() => (t ? x("building") : s("请先选择小区"))}
            />
            <C_sf
              label="房号"
              required={!0}
              value={r ?? void 0}
              onClick={() => (a ? x("room") : s(t ? "请先选择楼栋" : "请先选择小区"))}
            />
          </div>
        </C_sc>
        {u ? <C_sPicker {...u} onSelect={h} onClose={() => x(null)} /> : null}
        <C_sc className="flex flex-col gap-4">
          <C_sd>业主信息</C_sd>
          <div className="grid grid-cols-2 gap-3">
            <C_su label="姓名" placeholder="请输入" required={!0} />
            <C_su label="年龄" placeholder="请输入" type="number" />
          </div>
          <C_su label="电话号码" placeholder="请输入联系号码" type="tel" required={!0} />
          <div className="grid grid-cols-2 gap-3">
            <C_su label="职业" placeholder="请输入" />
            <C_su label="家庭人口" placeholder="请输入" type="number" />
          </div>
          <C_su label="兴趣爱好" placeholder="如：书法、广场舞、象棋" />
        </C_sc>
      </C_si>
    );
  },
  certList: function () {
    let { go: e } = o();
    return (
      <C_si
        title="我的认证"
        className="bg-sub-wash"
        nav={
          <C_sr
            title="我的认证"
            right={
              <span className="flex items-center gap-0.5">
                <C_e8 className="size-4" />
                添加
              </span>
            }
            onRight={() => e("certify")}
          />
        }
      >
        {sA.map((s) => (
          <C_sc
            key={s.room}
            onClick={"reject" === s.status ? () => e(s.to) : void 0}
            className="flex items-center gap-3"
          >
            <span
              className={eb(
                "flex size-11 shrink-0 items-center justify-center rounded-2xl",
                "ok" === s.status && "bg-success-soft text-success",
                "pending" === s.status && "bg-warm-soft text-warm-ink",
                "reject" === s.status && "bg-danger-soft text-danger",
              )}
            >
              <C_e0 className="size-5" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-[15px] font-semibold text-ink">{s.name}</span>
              <span className="text-xs text-ink-2 tabular-nums">
                {s.room}
                {" · 提交于 "}
                {s.date}
              </span>
              {s.reason ? <span className="text-xs text-danger">驳回：{s.reason}</span> : null}
            </span>
            {"ok" === s.status ? (
              <C_sh tone="teal">已认证</C_sh>
            ) : "pending" === s.status ? (
              <C_sh tone="warm">审核中</C_sh>
            ) : (
              <C_sh tone="red">已驳回</C_sh>
            )}
          </C_sc>
        ))}
      </C_si>
    );
  },
  certReject: sW({
    name: "江畔雅苑 2栋-1102",
    owner: "林小雨",
    phone: "138****6721",
    submit: "08-28 14:20",
    audit: "08-29 09:35 · 物业 李工",
    logs: [
      {
        time: "08-29 09:35",
        n: 2,
        title: "房号信息与物业登记不一致",
        desc: "登记房号为 2栋-1101，你填写的是 2栋-1102",
        who: "物业 李工",
      },
      {
        time: "08-25 16:40",
        n: 1,
        title: "联系电话无法接通",
        desc: "审核期间多次拨打未接通，请确认号码准确",
        who: "物业 李工",
      },
    ],
  }),
  certReject2: sW({
    name: "翠湖小区 6栋1单元-0501",
    owner: "陈志远",
    phone: "139****3308",
    submit: "09-02 10:05",
    audit: "09-03 15:12 · 物业 王主管",
    logs: [
      {
        time: "09-03 15:12",
        n: 2,
        title: "业主姓名与产权人不一致",
        desc: "产权人登记为「陈志明」，你填写的是「陈志远」",
        who: "物业 王主管",
      },
      {
        time: "09-01 11:28",
        n: 1,
        title: "缺少关系证明",
        desc: "如为亲属，请补充户口本或委托书等关系证明材料",
        who: "物业 王主管",
      },
    ],
  }),
  communitySwitch: function () {
    let { go: e, back: s, toast: t } = o(),
      [l, a] = (0, c.useState)(0);
    return (
      <C_si title="我的小区" className="bg-sub-wash">
        {[
          {
            name: "阳光花园",
            room: "3栋2单元-1802",
            ok: !0,
          },
          {
            name: "金色家园",
            room: "7栋1单元-0502",
            ok: !0,
          },
          {
            name: "玫瑰新城",
            room: "5栋1单元-0903",
            ok: !1,
          },
        ].map((e, n) => (
          <C_sc
            key={e.name}
            onClick={() => {
              if (!e.ok) return t("审核通过后才能切换");
              (a(n), t(`已切换至 ${e.name}`), s());
            }}
            className={eb("flex items-center gap-3", n === l && "ring-2 ring-brand")}
          >
            <span
              className={eb(
                "flex size-11 items-center justify-center rounded-2xl",
                e.ok ? "bg-brand-soft text-brand-deep" : "bg-tag-muted text-ink-3",
              )}
            >
              <C_e0 className="size-5" />
            </span>
            <span className="flex flex-1 flex-col gap-1">
              <span className="text-[15px] font-semibold text-ink">{e.name}</span>
              <span className="text-xs text-ink-2">
                {e.room}
                {" · "}
                {e.ok ? "已认证" : "审核中"}
              </span>
            </span>
            {n === l ? <C_sh>当前</C_sh> : e.ok ? null : <C_sh tone="warm">审核中</C_sh>}
          </C_sc>
        ))}
        <C_sc onClick={() => e("certify")} className="flex items-center gap-3 bg-brand-mist">
          <span className="bg-brand-gradient flex size-11 items-center justify-center rounded-2xl text-surface">
            <C_e8 className="size-5" />
          </span>
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-[15px] font-semibold text-ink">添加认证社区</span>
            <span className="text-xs text-ink-2">选择小区提交认证申请</span>
          </span>
        </C_sc>
        <C_sC>
          列表显示当前已认证的小区，可点击切换；审核中的小区需物业后台通过后才能切换，未认证小区将显示缺省内容
        </C_sC>
      </C_si>
    );
  },
};
var eW = eW;
let sq = ew("activity", [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ]),
  C_s$ = ew("arrow-down", [
    [
      "path",
      {
        d: "M12 5v14",
        key: "s699le",
      },
    ],
    [
      "path",
      {
        d: "m19 12-7 7-7-7",
        key: "1idqje",
      },
    ],
  ]),
  C_sF = ew("arrow-up", [
    [
      "path",
      {
        d: "m5 12 7-7 7 7",
        key: "hav0vg",
      },
    ],
    [
      "path",
      {
        d: "M12 19V5",
        key: "x0mq9r",
      },
    ],
  ]),
  sE = ew("chart-column", [
    [
      "path",
      {
        d: "M3 3v16a2 2 0 0 0 2 2h16",
        key: "c24i48",
      },
    ],
    [
      "path",
      {
        d: "M18 17V9",
        key: "2bz60n",
      },
    ],
    [
      "path",
      {
        d: "M13 17V5",
        key: "1frdt8",
      },
    ],
    [
      "path",
      {
        d: "M8 17v-3",
        key: "17ska0",
      },
    ],
  ]),
  C_sB = ew("bluetooth", [
    [
      "path",
      {
        d: "m7 7 10 10-5 5V2l5 5L7 17",
        key: "1q5490",
      },
    ],
  ]),
  C_sV = ew("droplets", [
    [
      "path",
      {
        d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
        key: "1ptgy4",
      },
    ],
    [
      "path",
      {
        d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
        key: "1sl1rz",
      },
    ],
  ]),
  C_sT = ew("external-link", [
    [
      "path",
      {
        d: "M15 3h6v6",
        key: "1q9fwt",
      },
    ],
    [
      "path",
      {
        d: "M10 14 21 3",
        key: "gplh6r",
      },
    ],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ]),
  C_sG = ew("file-text", [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    [
      "path",
      {
        d: "M14 2v5a1 1 0 0 0 1 1h5",
        key: "wfsgrz",
      },
    ],
    [
      "path",
      {
        d: "M10 9H8",
        key: "b1mrlr",
      },
    ],
    [
      "path",
      {
        d: "M16 13H8",
        key: "t4e002",
      },
    ],
    [
      "path",
      {
        d: "M16 17H8",
        key: "z1uh3a",
      },
    ],
  ]),
  sU = ew("heart-pulse", [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
    [
      "path",
      {
        d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
        key: "auskq0",
      },
    ],
  ]),
  C_sZ = ew("loader-circle", [
    [
      "path",
      {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald",
      },
    ],
  ]),
  sJ = ew("moon", [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ]),
  C_sQ = ew("phone", [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ]),
  sX = ew("phone-call", [
    [
      "path",
      {
        d: "M13 2a9 9 0 0 1 9 9",
        key: "1itnx2",
      },
    ],
    [
      "path",
      {
        d: "M13 6a5 5 0 0 1 5 5",
        key: "11nki7",
      },
    ],
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ]),
  C_sY = ew("refresh-cw", [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    [
      "path",
      {
        d: "M21 3v5h-5",
        key: "1q7to0",
      },
    ],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    [
      "path",
      {
        d: "M8 16H3v5",
        key: "1cv678",
      },
    ],
  ]),
  C_sK = ew("shield-alert", [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    [
      "path",
      {
        d: "M12 8v4",
        key: "1got3b",
      },
    ],
    [
      "path",
      {
        d: "M12 16h.01",
        key: "1drbdi",
      },
    ],
  ]),
  C_s0 = ew("shield-check", [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    [
      "path",
      {
        d: "m9 12 2 2 4-4",
        key: "dzmm74",
      },
    ],
  ]),
  C_s1 = ew("siren", [
    [
      "path",
      {
        d: "M7 18v-6a5 5 0 1 1 10 0v6",
        key: "pcx96s",
      },
    ],
    [
      "path",
      {
        d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
        key: "1b4s83",
      },
    ],
    [
      "path",
      {
        d: "M21 12h1",
        key: "jtio3y",
      },
    ],
    [
      "path",
      {
        d: "M18.5 4.5 18 5",
        key: "g5sp9y",
      },
    ],
    [
      "path",
      {
        d: "M2 12h1",
        key: "1uaihz",
      },
    ],
    [
      "path",
      {
        d: "M12 2v1",
        key: "11qlp1",
      },
    ],
    [
      "path",
      {
        d: "m4.929 4.929.707.707",
        key: "1i51kw",
      },
    ],
    [
      "path",
      {
        d: "M12 12v6",
        key: "3ahymv",
      },
    ],
  ]),
  C_s2 = ew("watch", [
    [
      "path",
      {
        d: "M12 10v2.2l1.6 1",
        key: "n3r21l",
      },
    ],
    [
      "path",
      {
        d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",
        key: "18k57s",
      },
    ],
    [
      "path",
      {
        d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",
        key: "16ny36",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "6",
        key: "1vlfrh",
      },
    ],
  ]);
  function C_s3({ img: e, title: s, desc: t, price: l, tag: a, cover: c, alt: r = "" }) {
  return (
  <div className="shadow-card relative shrink-0 overflow-hidden rounded-[24px] bg-surface">
  <div className={eb("relative bg-brand-mist", c ? "aspect-[16/9]" : "h-36")}>
  <eW.Image src={e} alt={r} fill={!0} sizes="343px" className={c ? "object-cover" : "object-contain p-3"} />
        {a ? <C_sh className="absolute top-3 left-3">{a}</C_sh> : null}
      </div>
      <div className="flex items-end justify-between gap-3 p-4">
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-lg font-bold text-ink">{s}</p>
          <p className="text-xs leading-relaxed text-ink-2">{t}</p>
        </div>
        {l}
      </div>
    </div>
  );
}
function C_s5({ rating: e, served: s, good: t }) {
  return (
    <C_sc className="grid grid-cols-3 py-3">
      {[
        [e, "综合评分"],
        [s, "已服务"],
        [t, "好评率"],
      ].map(([e, s], t) => (
        <div key={s} className={eb("flex flex-col items-center gap-0.5", 1 === t && "border-x border-hairline")}>
          <span className="text-lg font-bold text-brand-deep tabular-nums">{e}</span>
          <span className="text-[11px] text-ink-3">{s}</span>
        </div>
      ))}
    </C_sc>
  );
}
function C_s4() {
  let { go: e } = o();
  return (
    <C_sc>
      <C_sd
        extra={
          <button type="button" onClick={() => e("review")} className="press flex items-center text-xs text-ink-2">
            查看更多
            <C_e$ className="size-3.5" />
          </button>
        }
      >
        用户评价
      </C_sd>
      <div className="flex flex-col gap-3">
        {[
          ["09-04 14:30", "服务很贴心，准时又细致，老人很满意。"],
          ["09-03 19:08", "流程清楚，沟通顺畅，下次还会预约。"],
          ["08-29 10:15", "工作人员耐心专业，值得推荐。"],
        ].map(([e, s]) => (
          <div key={e} className="flex flex-col gap-1 rounded-2xl bg-fill p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-semibold text-ink">
                匿名
                <C_sM />
              </span>
              <span className="text-[11px] text-ink-3 tabular-nums">{e}</span>
            </div>
            <p className="text-xs leading-relaxed text-ink-2">{s}</p>
          </div>
        ))}
      </div>
    </C_sc>
  );
}
function C_s6({ items: e }) {
  return (
    <ul className="flex flex-col gap-2">
      {e.map((e) => {
        let [s, ...t] = e.split("：");
        return (
          <li key={e} className="flex gap-2 text-[13px] leading-relaxed text-ink-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
            <span>
              {t.length ? <b className="font-semibold text-ink">{s}：</b> : null}
              {t.length ? t.join("：") : s}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
let s8 = [
    {
      t: "上门关爱探访",
      d: "管家上门探望老人，关注生活起居与健康状态",
      icon: C_eD,
    },
    {
      t: "老幼家庭巡访",
      d: "上门看一眼家中老人与孩子情况，异常及时反馈家属",
      icon: C_eL,
    },
    {
      t: "健康上门随访",
      d: "为行动不便老人上门测量心率血压，数据同步健康小屋",
      icon: sU,
    },
    {
      t: "邻居电话问安",
      d: "每日定时电话问候独居老人，了解需求并跟进反馈",
      icon: C_sQ,
    },
  ],
  s9 = [
    {
      name: "心率",
      icon: sU,
      value: "78",
      unit: "次/分",
      ok: !0,
      range: "60 - 100 次/分",
    },
    {
      name: "血压",
      icon: sq,
      value: "120/80",
      unit: "mmHg",
      ok: !0,
      range: "收缩压 90-139 / 舒张压 60-89 mmHg",
    },
    {
      name: "血脂",
      icon: C_sV,
      value: "5.2",
      unit: "mmol/L",
      ok: !1,
      range: "总胆固醇 3.1-5.2 / 甘油三酯 0.4-1.7 mmol/L · 甘油三酯 1.6 偏高",
    },
  ];
function C_s7() {
  return (
    <div className="bg-hero-wash shadow-float flex items-center justify-between rounded-[24px] p-5 text-surface">
      <div className="flex flex-col gap-1">
        <span className="text-xs opacity-90">综合风险等级</span>
        <span className="text-3xl font-bold">中风险</span>
        <span className="text-xs opacity-90">评估时间 09-01 · 每周自动更新一次</span>
      </div>
      <span className="flex size-16 items-center justify-center rounded-full bg-surface/25">
        <C_sK className="size-8" />
      </span>
    </div>
  );
}
let te = [
  {
    t: "血脂偏高",
    d: "甘油三酯 1.6 mmol/L，高于正常值",
    icon: C_sV,
  },
  {
    t: "睡眠不足",
    d: "近一周平均睡眠 5.6 小时",
    icon: sJ,
  },
];
function C_ts() {
  let { go: e } = o();
  return (
    <C_sc className="flex flex-col py-1">
      <div className="pt-3">
        <C_sd>风险因素</C_sd>
      </div>
      {te.map((s) => (
        <C_so
          key={s.t}
          icon={<s.icon className="size-4" />}
          label={s.t}
          desc={s.d}
          strong={!0}
          value={<C_sh tone="red">关注</C_sh>}
          onClick={() => e("riskFactor")}
        />
      ))}
    </C_sc>
  );
}
let tt = [
    ["医院就诊全程陪诊", "含挂号协助、问诊陪同、取药代领、报告解读", "320", "560"],
    ["专家号预约陪诊", "三甲专家号预约 · 全程陪同就诊", "380", "680"],
    ["体检全程陪检", "体检项目引导、排队取号、报告代取", "260", "460"],
    ["夜间急诊陪诊", "夜间及节假日急诊陪同就医", "480", "960"],
    ["代取药送药上门", "处方代取 · 药品配送到家", "60", "100"],
  ],
  tl = [
    ["禄口一小课后托管", "工作日课后看护 · 单日预约", "45"],
    ["禄口二小周末托管", "周末单日托管 · 含午餐与看护", "90"],
    ["禄口三中接送托管", "单日上下学接送 · 全时段看护", "65"],
    ["禄口实验小学节假日托管", "节假日单日全时段看护", "90"],
  ],
  ta = [
    {
      n: "清蒸鲈鱼 · 时蔬 · 米饭",
      d: "低油低盐 · 适老营养餐",
      p: 18,
      img: "/images/meal-fish.png",
    },
    {
      n: "香菇滑鸡 · 西兰花 · 软米饭",
      d: "高蛋白低脂",
      p: 20,
      img: "/images/meal-chicken.png",
    },
    {
      n: "番茄炖牛腩 · 时蔬 · 杂粮饭",
      d: "补铁暖身",
      p: 22,
      img: "/images/meal-beef.png",
    },
  ],
  tn = [
    "早餐：前一天晚上7点之前下单，晚上7点后无法下单无法取消订单",
    "午餐：当天早上10点之前下单，早上10点后无法下单无法取消订单",
    "晚餐：当天中午2点之前下单，中午2点后无法下单无法取消订单",
  ];
function C_tr() {
  return (
    <C_sc>
      <C_sd>取消订单说明</C_sd>
      <C_s6 items={tn} />
    </C_sc>
  );
}
let ti = [
    ["家政保洁", "全屋深度清洁 · 含厨卫除污", "180"],
    ["家电维修", "空调 / 洗衣机 / 冰箱上门检修", "120"],
    ["管道疏通", "厨卫下水道疏通 · 30 分钟响应", "150"],
    ["开锁换锁", "公安备案锁匠 · 24 小时上门", "200"],
    ["家具安装", "拆装、组装、墙面打孔挂件", "160"],
    ["适老改造", "扶手安装、防滑处理、无障碍改造", "380"],
  ],
  tc = {
    healthHome: function () {
      let { go: e } = o(),
        s = [
          {
            t: "实时健康数据",
            d: "心率 · 血压 · 血脂",
            icon: sq,
            to: "healthData",
          },
          {
            t: "健康数据对比",
            d: "近一次 / 近一周 / 近一月",
            icon: sE,
            to: "healthCompare",
          },
          {
            t: "历史检测报告",
            d: "日报 · 周报 · 月报 · 年报",
            icon: C_sG,
            to: "healthReport",
          },
          {
            t: "健康风险评估",
            d: "每周自动更新评估结果",
            icon: C_s0,
            to: "healthRisk",
          },
        ];
      return (
        <C_si title="健康小屋" className="bg-sub-wash">
          <div className="bg-hero-wash shadow-float flex flex-col gap-4 rounded-[24px] p-5 text-surface">
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-surface/25">
                <C_s2 className="size-6" />
              </span>
              <div className="flex flex-1 flex-col">
                <span className="text-base font-bold">Huawei Band 7</span>
                <span className="text-xs opacity-90">最后同步：09-08 14:20</span>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-surface/25 px-2.5 py-1 text-[11px]">
                <span className="size-1.5 rounded-full bg-surface" />
                已连接
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => e("myBand")}
                className="press flex-1 rounded-full bg-surface/25 py-2 text-[13px] font-semibold"
              >
                取消连接
              </button>
              <button
                type="button"
                onClick={() => e("bandConnect")}
                className="press flex-1 rounded-full bg-surface py-2 text-[13px] font-semibold text-brand-deep"
              >
                更换设备
              </button>
            </div>
          </div>
          <C_sx title="健康数据" />
          <div className="grid grid-cols-2 gap-3">
            {s.map((s) => (
              <C_sc key={s.t} onClick={() => e(s.to)} className="flex flex-col gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                  <s.icon className="size-5" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">{s.t}</span>
                  <span className="text-[11px] text-ink-3">{s.d}</span>
                </span>
              </C_sc>
            ))}
          </div>
          <button
            type="button"
            onClick={() => e("callMine")}
            className="press shadow-card flex items-center gap-3 rounded-[20px] bg-danger p-4 text-surface"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-surface/20">
              <C_s1 className="size-6" />
            </span>
            <span className="flex flex-1 flex-col text-left">
              <span className="text-base font-bold">紧急呼叫</span>
              <span className="text-xs opacity-90">一键联系物业中心 / 急救中心</span>
            </span>
            <C_e$ className="size-5" />
          </button>
          <C_sx title="暖心陪诊 · 一路相伴" />
          <button
            type="button"
            onClick={() => e("escortList")}
            aria-label="陪诊服务，立即预约"
            className="relative block aspect-[16/9] w-full shrink-0 overflow-hidden rounded-[20px] bg-brand-mist text-left shadow-[0_8px_24px_-12px_rgba(120,72,20,0.35)]"
          >
            <eW.Image src="/images/escort.png" alt="" fill={!0} sizes="(max-width: 480px) 100vw, 360px" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <span className="flex flex-col gap-1 text-white">
                <span className="text-lg font-bold">陪诊服务</span>
                <span className="text-[11px] leading-relaxed opacity-90">挂号协助 · 问诊陪同 · 取药代领 · 报告解读</span>
              </span>
              <span className="bg-brand-gradient shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold text-surface">
                立即预约
              </span>
            </span>
          </button>
          <C_sx title="生活服务帮手" />
          <C_sc className="flex flex-col py-1">
            {s8.map((s, t) => (
              <div key={s.t} className={eb(t > 0 && "border-t border-hairline")}>
                <C_so
                  icon={<s.icon className="size-4" />}
                  label={s.t}
                  desc={s.d}
                  strong={!0}
                  onClick={() => e("careInfo")}
                />
              </div>
            ))}
          </C_sc>
        </C_si>
      );
    },
    careInfo: function () {
      let { go: e } = o();
      return (
        <C_si
          title="服务详情"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("careOrder")}>
              立即预约
            </C_sp>
          }
        >
          <C_sc className="flex items-center gap-3">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <C_eD className="size-7" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-lg font-bold text-ink">上门关爱探访</span>
              <span className="text-xs text-ink-2">管家上门探望老人，关注生活起居与健康状态</span>
            </span>
          </C_sc>
          <C_sc>
            <C_sd>服务详情</C_sd>
            <p className="text-[13px] leading-relaxed text-ink-2">
              由社区管家定期上门探望老人，面对面了解生活起居、身体状况与实际需求，探访情况将同步反馈家属。
            </p>
          </C_sc>
          <C_sc>
            <C_sd>服务内容</C_sd>
            <C_s6
              items={[
                "上门探访：与老人面对面交流，关注情绪与生活状态",
                "情况记录：记录健康与生活需求，异常情况及时反馈家属",
                "需求转介：有服务需求时协助对接物业与社区资源",
              ]}
            />
  </C_sc>
  </C_si>
      );
    },
    careOrder: function () {
      let { go: e, toast: s } = o();
      return (
        <C_si
          title="提交服务订单"
          className="bg-sub-wash"
          bottom={
            <C_sp
              block={!0}
              onClick={() => {
                (s("订单已提交"), e("ordersHelper"));
              }}
            >
              提交订单
            </C_sp>
          }
        >
          <C_sc className="flex items-center gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <C_eD className="size-6" />
            </span>
            <span className="flex flex-1 flex-col">
              <span className="text-[15px] font-bold text-ink">上门关爱探访</span>
              <span className="text-xs text-ink-2">管家上门探望老人，关注生活起居与健康状态</span>
            </span>
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_sf label="上门时间" placeholder="请选择上门服务时间" required={!0} />
            <C_su label="服务地址" defaultValue="阳光花园 3栋2单元1802" readOnly={!0} />
            <C_su label="联系电话" defaultValue="13800006688" type="tel" />
            <C_su label="备注" placeholder="请描述服务需求" textarea={!0} />
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_sk max={6} hint="请上传服务需求相关图片（最多 6 张）" />
            <C_sk kind="video" max={1} hint="请上传服务需求相关视频（最多 1 个）" />
          </C_sc>
        </C_si>
      );
    },
    bandConnect: function () {
      let { go: e } = o();
      return (
        <C_si title="连接健康手环" className="bg-sub-wash items-center gap-6 px-6 text-center">
          <div className="relative mt-10 flex size-40 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-brand-soft" />
            <span className="absolute inset-5 rounded-full bg-brand/30" />
            <span className="bg-brand-gradient shadow-float relative flex size-20 items-center justify-center rounded-full text-surface">
              <C_sB className="size-9" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-ink">通过手机号自动匹配</p>
            <p className="text-sm leading-relaxed text-ink-2">
              {"将使用注册手机号 "}
              <b className="text-ink tabular-nums">138****6688</b>
              <br />
              与手环厂商账号进行匹配
            </p>
          </div>
          <C_sp block={!0} onClick={() => e("bandConnecting")}>
            去连接
          </C_sp>
        </C_si>
      );
    },
    bandConnecting: function () {
      let { back: e, reset: s, go: t, toast: l } = o();
      return (
        <C_si title="连接健康手环" className="bg-sub-wash items-center gap-6 px-6 text-center">
          <div className="mt-10 flex size-40 items-center justify-center rounded-full bg-brand-soft">
            <C_sZ className="size-16 animate-spin text-brand-deep" strokeWidth={1.6} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-ink">正在匹配健康手环…</p>
            <p className="text-sm leading-relaxed text-ink-2">
              正在通过注册手机号 138****6688 与手环厂商账号匹配
              <br />
              匹配成功后将自动同步历史数据
            </p>
          </div>
          <div className="flex w-full flex-col gap-3">
            <C_sp
              block={!0}
              onClick={() => {
                (l("匹配成功"), s("home"), t("healthHome"));
              }}
            >
              模拟匹配成功
            </C_sp>
            <C_sp block={!0} variant="ghost" onClick={e}>
              取消
            </C_sp>
          </div>
        </C_si>
      );
    },
    healthData: function () {
      let { go: e, toast: s } = o();
      return (
        <C_si title="实时健康数据" className="bg-sub-wash">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs text-ink-2">更新于 09-04 09:30 · 每30分钟自动同步</span>
            <C_sp size="sm" variant="soft" onClick={() => s("同步完成")}>
              <C_sY className="size-3.5" />
              同步
            </C_sp>
          </div>
          {s9.map((s) => (
            <C_sc key={s.name} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-[15px] font-semibold text-ink">
                  <span
                    className={eb(
                      "flex size-8 items-center justify-center rounded-xl",
                      s.ok ? "bg-brand-soft text-brand-deep" : "bg-danger-soft text-danger",
                    )}
                  >
                    <s.icon className="size-4" />
                  </span>
                  {s.name}
                </span>
                <C_sh tone={s.ok ? "teal" : "red"}>{s.ok ? "正常" : "异常"}</C_sh>
              </div>
              <p className="flex items-baseline gap-1">
                <span className={eb("text-4xl font-bold tabular-nums", s.ok ? "text-ink" : "text-danger")}>
                  {s.value}
                </span>
                <span className="text-sm text-ink-3">{s.unit}</span>
              </p>
              <p className="rounded-xl bg-fill px-3 py-2 text-xs leading-relaxed text-ink-2">
                {"正常范围 "}
                {s.range}
              </p>
              <button
                type="button"
                onClick={() => e("healthTrend")}
                className="press flex items-center self-end text-xs font-semibold text-brand-deep"
              >
                查看历史趋势图
                <C_e$ className="size-3.5" />
              </button>
            </C_sc>
          ))}
        </C_si>
      );
    },
    healthCompare: function () {
      let [e, s] = (0, c.useState)("近一次");
      return (
        <C_si title="健康数据对比" className="bg-sub-wash">
          <C_sj items={["近一次", "近一周", "近一个月"]} value={e} onChange={s} />
          {[
            {
              n: "心率对比",
              d: "5 次/分",
              up: !1,
              last: "83",
              ch: "-5",
              now: "78",
            },
            {
              n: "血压对比",
              d: "3 mmHg",
              up: !0,
              last: "117/79",
              ch: "+3",
              now: "120/80",
            },
            {
              n: "血脂对比",
              d: "0.3 mmol/L",
              up: !1,
              last: "5.5",
              ch: "-0.3",
              now: "5.2",
            },
          ].map((e) => (
            <C_sc key={e.n} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-semibold text-ink">{e.n}</span>
                <span
                  className={eb("flex items-center gap-0.5 text-sm font-bold", e.up ? "text-danger" : "text-success")}
                >
                  {e.up ? <C_sF className="size-4" /> : <C_s$ className="size-4" />}
                  {e.d}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["上次", e.last],
                  ["变化", e.ch],
                  ["本次", e.now],
                ].map(([e, s], t) => (
                  <div
                    key={e}
                    className={eb(
                      "flex flex-col items-center gap-0.5 rounded-2xl py-2.5",
                      2 === t ? "bg-brand-soft" : "bg-fill",
                    )}
                  >
                    <span className="text-[11px] text-ink-3">{e}</span>
                    <span className={eb("text-base font-bold tabular-nums", 2 === t ? "text-brand-ink" : "text-ink")}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </C_sc>
          ))}
          <C_sC>变化幅度用箭头表示：上升红色、下降绿色；无历史数据时显示「暂无对比数据」</C_sC>
        </C_si>
      );
    },
    healthReport: function () {
      let { go: e } = o(),
        [s, t] = (0, c.useState)("日报"),
        [l, a] = (0, c.useState)("24小时");
      return (
        <C_si title="历史检测报告" className="bg-sub-wash">
          <C_sj items={["日报", "周报", "月报", "年报"]} value={s} onChange={t} />
          <div className="flex gap-2">
            {["24小时", "近七天", "近30天"].map((e) => (
              <button
                key={e}
                type="button"
                onClick={() => a(e)}
                className={eb(
                  "press rounded-full px-3 py-1 text-xs",
                  e === l ? "bg-brand-soft font-semibold text-brand-deep" : "text-ink-2",
                )}
              >
                {e}
              </button>
            ))}
          </div>
          <p className="px-1 text-xs text-ink-3">共 4 份{s}报告</p>
          {[
            ["2026-09-04", "09-04", 82],
            ["2026-09-03", "09-03", 79],
            ["2026-09-02", "09-02", 74],
            ["2026-09-01", "09-01", 80],
          ].map(([t, l, a]) => (
            <C_sc key={t} onClick={() => e("reportDetail")} className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                <C_sG className="size-5" />
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="text-sm font-semibold text-ink">
                  {t}
                  {" 健康"}
                  {s}
                </span>
                <span className="text-xs text-ink-3">
                  {s}
                  {" · "}
                  {l}
                  {" 08:00 自动生成"}
                </span>
              </span>
              <span className="flex items-baseline gap-0.5">
                <span className="text-xl font-bold text-brand-deep tabular-nums">{a}</span>
                <span className="text-xs text-ink-3">分</span>
              </span>
            </C_sc>
          ))}
          <C_sC>日报 / 周报 / 月报 / 年报由系统定时自动生成，报告永久保存</C_sC>
        </C_si>
      );
    },
    healthRisk: function () {
      let { go: e } = o();
      return (
        <C_si title="健康风险评估" className="bg-sub-wash">
          <C_s7 />
          <C_ts />
          <C_sp block={!0} variant="outline" onClick={() => e("riskReport")}>
            查看完整评估报告
          </C_sp>
          <C_sC>评估结果仅供参考，不能替代医疗诊断</C_sC>
        </C_si>
      );
    },
    healthTrend: function () {
      let [e, s] = (0, c.useState)("近七天"),
        t = [72, 81, 63, 92, 71, 76, 78];
      return (
        <C_si title="健康趋势" className="bg-sub-wash">
          <C_sj items={["近七天", "近30天", "近一年"]} value={e} onChange={s} />
          <C_sc className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[15px] font-semibold text-ink">变化趋势</span>
              <span className="flex items-center text-sm font-bold text-success">
                <C_s$ className="size-4" />5 次/分
              </span>
            </div>
            <div className="flex h-32 items-end gap-2.5 rounded-2xl bg-fill px-3 pt-3 pb-2">
              {t.map((e, s) => (
                <div key={s} className="flex flex-1 flex-col items-center gap-1">
                  <span
                    className={eb(
                      "w-full rounded-t-lg rounded-b-sm",
                      s === t.length - 1 ? "bg-brand-gradient" : e > 90 ? "bg-danger/70" : "bg-brand/35",
                    )}
                    style={{
                      height: `${(e - 50) * 2}px`,
                    }}
                  />
                  <span className="text-[10px] text-ink-3 tabular-nums">{`0${s + 1}`.slice(-2)}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                ["平均值", "76"],
                ["最高", "92"],
                ["最低", "63"],
              ].map(([e, s]) => (
                <div key={e} className="flex flex-col gap-0.5">
                  <span className="text-lg font-bold text-ink tabular-nums">{s}</span>
                  <span className="text-[11px] text-ink-3">{e}</span>
                </div>
              ))}
            </div>
          </C_sc>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>检测记录</C_sd>
            </div>
            {[
              ["78", "09-04 09:30", "自动同步", !0],
              ["92", "09-03 18:20", "运动后", !1],
              ["71", "09-03 09:00", "自动同步", !0],
              ["63", "09-02 23:10", "睡眠中", !0],
              ["81", "09-02 09:00", "自动同步", !0],
              ["74", "09-01 22:15", "睡眠中", !0],
            ].map(([e, s, t, l]) => (
              <div key={s} className="flex items-center gap-3 border-t border-hairline py-2.5 first:border-t-0">
                <span className="flex w-20 items-baseline gap-0.5">
                  <span className={eb("text-lg font-bold tabular-nums", l ? "text-ink" : "text-danger")}>{e}</span>
                  <span className="text-[11px] text-ink-3">次/分</span>
                </span>
                <span className="flex flex-1 flex-col text-xs text-ink-2">
                  <span className="tabular-nums">{s}</span>
                  <span className="text-ink-3">{t}</span>
                </span>
                <C_sh tone={l ? "teal" : "red"}>{l ? "正常" : "偏高"}</C_sh>
              </div>
            ))}
          </C_sc>
        </C_si>
      );
    },
    reportDetail: function () {
      let { toast: e } = o();
      return (
        <C_si
          title="报告详情"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("报告已保存至相册")}>
              保存报告
            </C_sp>
          }
        >
          <div className="bg-hero-wash shadow-float flex items-center gap-4 rounded-[24px] p-5 text-surface">
            <span className="flex size-20 flex-col items-center justify-center rounded-full bg-surface text-brand-deep">
              <span className="text-3xl leading-none font-bold tabular-nums">82</span>
              <span className="text-[10px]">综合评分</span>
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-lg font-bold">2026-09-04 健康日报</span>
              <span className="text-sm">健康状态良好</span>
              <span className="text-xs opacity-90">日报 · 09-04 08:00 自动生成</span>
            </span>
          </div>
          <C_sc>
            <C_sd>数据概览</C_sd>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                ["心率", "正常范围 60 - 100 次/分", "78 次/分", !0],
                ["血压", "收缩压 120 / 舒张压 80", "120/80", !0],
                ["血脂", "甘油三酯 1.6 mmol/L", "5.2", !1],
                ["睡眠", "建议 7 - 9 小时", "6.2 小时", !1],
              ].map(([e, s, t, l]) => (
                <div key={e} className={eb("flex flex-col gap-1 rounded-2xl p-3", l ? "bg-fill" : "bg-danger-soft")}>
                  <span className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-ink">{e}</span>
                    <span className={l ? "text-success" : "text-danger"}>
                      {l ? "正常" : "睡眠" === e ? "偏少" : "偏高"}
                    </span>
                  </span>
                  <span className={eb("text-lg font-bold tabular-nums", l ? "text-ink" : "text-danger")}>{t}</span>
                  <span className="text-[10px] leading-relaxed text-ink-3">{s}</span>
                </div>
              ))}
            </div>
          </C_sc>
          <C_sc>
            <C_sd>健康建议</C_sd>
            <C_s6
              items={[
                "心率与血压均在正常范围，请保持规律作息与适度运动。",
                "甘油三酯略高于正常值，建议减少油炸与高糖食物摄入，增加膳食纤维。",
                "近一周平均睡眠 6.2 小时，低于建议时长，建议提前 30 分钟入睡。",
                "建议每周进行 3 次以上、每次 30 分钟的中等强度有氧运动。",
              ]}
            />
          </C_sc>
        </C_si>
      );
    },
    riskReport: function () {
      let { toast: e } = o();
      return (
        <C_si
  title="完整评估报告"
  className="bg-sub-wash"
  >
          <C_s7 />
          <C_sc>
            <C_sd>各维度评分</C_sd>
            <div className="flex flex-col gap-2.5">
              {[
                ["心血管", "血压与心率综合评估", "低风险"],
                ["血脂代谢", "甘油三酯与总胆固醇", "中风险"],
                ["睡眠质量", "近一周平均睡眠时长", "中风险"],
                ["运动状况", "日均步数与活动量", "低风险"],
              ].map(([e, s, t]) => (
                <div key={e} className="flex items-center gap-3 rounded-2xl bg-fill p-3">
                  <span className="flex flex-1 flex-col gap-0.5">
                    <span className="text-sm font-semibold text-ink">{e}</span>
                    <span className="text-[11px] text-ink-3">{s}</span>
                  </span>
                  <C_sh tone={"低风险" === t ? "teal" : "warm"}>{t}</C_sh>
                </div>
              ))}
            </div>
          </C_sc>
          <C_ts />
          <C_sc>
            <C_sd>改善建议</C_sd>
            <C_s6
              items={[
                "控制油脂摄入，每周至少 3 次有氧运动，每次 30 分钟以上。",
                "固定作息时间，睡前 1 小时避免使用电子设备。",
                "建议 3 个月后复查血脂四项，持续观察变化趋势。",
                "如出现胸闷、头晕等不适症状，请及时就医。",
              ]}
            />
          </C_sc>
          <C_sC>评估结果仅供参考，不能替代医疗诊断 · 评估每周自动更新一次</C_sC>
        </C_si>
      );
    },
    riskFactor: function () {
      return (
        <C_si title="风险因素详情" className="bg-sub-wash">
          <C_sc className="flex flex-col gap-2 bg-danger-soft">
            <span className="flex items-center gap-2 text-lg font-bold text-danger">
              <C_sV className="size-5" />
              血脂偏高
            </span>
            <p className="text-[13px] leading-relaxed text-ink-2">
              甘油三酯 1.6 mmol/L，高于正常参考值上限（1.7 mmol/L 以下为正常，当前接近临界）
            </p>
          </C_sc>
          <C_sc>
            <C_sd
              extra={
                <span className="flex items-center text-sm font-bold text-danger">
                  <C_sF className="size-4" />
                  0.3 mmol/L
                </span>
              }
            >
              甘油三酯变化
            </C_sd>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["上次", "1.3"],
                ["本次", "1.6"],
                ["参考值", "<1.7"],
              ].map(([e, s], t) => (
                <div
                  key={e}
                  className={eb(
                    "flex flex-col items-center gap-0.5 rounded-2xl py-2.5",
                    1 === t ? "bg-danger-soft" : "bg-fill",
                  )}
                >
                  <span className="text-[11px] text-ink-3">{e}</span>
                  <span className={eb("text-base font-bold tabular-nums", 1 === t ? "text-danger" : "text-ink")}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </C_sc>
          <C_sc>
            <C_sd>可能原因</C_sd>
            <C_s6
              items={[
                "饮食中油脂、精制碳水化合物摄入偏多",
                "运动量不足，能量消耗低于摄入",
                "作息不规律，睡眠不足影响脂代谢",
                "遗传���素与年龄增长的自然变化",
              ]}
            />
          </C_sc>
          <C_sc>
            <C_sd>改善措施</C_sd>
            <C_s6
              items={[
                "减少动物内脏、油炸食品摄入，增加蔬菜与粗粮比例",
                "每周进行 3-5 次有氧运动，如快走、游泳、骑行",
                "保持规律作息，保证每日 7-8 小时睡眠",
                "3 个月后复查血脂四项，若持续升高建议就医",
              ]}
            />
          </C_sc>
          <C_sC>风险因素由系统根据手环数据自动识别 · 仅供参考，具体诊疗请遵医嘱</C_sC>
        </C_si>
      );
    },
    escortList: function () {
      let { go: e } = o();
      return (
        <C_si title="陪诊服务" className="bg-sub-wash">
          {tt.map(([s, t, l, a], n) => (
            <C_sc key={s} onClick={() => e("escortDetail")} className="flex gap-3">
              <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-brand-mist">
                <eW.Image src="/images/escort.png" alt="" fill={!0} sizes="80px" className="object-cover" />
                {0 === n ? (
                  <C_sh tone="red" className="absolute top-1 left-1">
                    热门
                  </C_sh>
                ) : null}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-[15px] font-bold text-ink">{s}</span>
                <span className="line-clamp-1 text-xs text-ink-2">{t}</span>
                <span className="mt-auto flex items-center gap-3 text-xs text-ink-3">
                  <span className="flex items-baseline gap-1">
                    {"半天 "}
                    <C_sP value={l} size="sm" />
                  </span>
                  <span className="flex items-baseline gap-1">
                    {"整天 "}
                    <C_sP value={a} size="sm" />
                  </span>
                </span>
              </span>
            </C_sc>
          ))}
        </C_si>
      );
    },
    escortDetail: function () {
      let { go: e } = o();
      return (
        <C_si
          title="服务详情"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("escortBook")}>
              立即预约
            </C_sp>
          }
        >
          <C_s3
            img="/images/escort.png"
            cover={!0}
            alt="陪诊员搀扶老人在医院走廊就诊"
            title="医院就诊全程陪诊"
            desc="含挂号协助、问诊陪同、取药代领、报告解读"
            price={
              <span className="flex flex-col items-end">
                <C_sP value="320" from={!0} />
                <span className="text-[11px] text-ink-3">整天 ¥560</span>
              </span>
            }
          />
          <C_sc className="flex shrink-0 flex-col gap-6">
            <section>
            <C_sd>服务详情</C_sd>
            <p className="text-[13px] leading-relaxed text-ink-2">
              由物业认证陪诊员全程陪同就医，从出门到回家，老人安心、家人放心。支持挂三甲 /
              专科医院，覆盖内科外科眼科口腔等常规科室。
            </p>
            </section>
            <section>
            <C_sd>服务流程</C_sd>
            <div className="flex flex-col gap-3">
              {[
                ["预约下单", "选择日期、时段与服务时长，提交后陪诊员接单"],
                ["上门接送", "从已绑定房号出发，必要时提供轮椅 / 拐杖辅助"],
                ["就诊陪同", "协助挂号、排队、问诊沟通、取药取报告"],
                ["送回返程", "陪护回家，整理药盒与下次复诊提示"],
              ].map(([e, s], t) => (
                <div key={e} className="flex gap-3">
                  <span className="bg-brand-gradient flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-surface">
                    {t + 1}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-ink">{e}</span>
                    <span className="text-xs leading-relaxed text-ink-2">{s}</span>
                  </span>
                </div>
              ))}
            </div>
            </section>
            <section>
            <C_sd>服务内容</C_sd>
            <div className="overflow-hidden rounded-2xl bg-fill">
              {[
                ["项目", "包含"],
                ["挂号协助", "线上 / 现场均可"],
                ["问诊陪同", "全程记录医嘱"],
                ["取药代领", "含处方核对"],
                ["报告解读", "家属群同步"],
                ["复诊提醒", "免费 1 次"],
              ].map(([e, s], t) => (
                <div
                  key={e}
                  className={eb(
                    "flex px-3 py-2.5 text-[13px]",
                    0 === t ? "bg-brand-soft font-semibold text-brand-ink" : "border-t border-surface text-ink-2",
                  )}
                >
                  <span className="flex-1">{e}</span>
                  <span className="flex-1 text-right">{s}</span>
                </div>
              ))}
            </div>
            </section>
            <section>
            <C_sd>适用人群</C_sd>
            <C_s6
              items={[
                "独居 / 高龄老人，子女不在身边需协助就医",
                "术后 / 慢病复诊，行动不便需全程陪同",
                "异地家属，无法陪伴父母就诊时远程放心",
              ]}
            />
            </section>
  </C_sc>
  </C_si>
      );
    },
    escortBook: function () {
      let { go: e } = o(),
        [s, t] = (0, c.useState)("半天"),
        [l, a] = (0, c.useState)(!0);
      return (
        <C_si
          title="服务预约"
          className="bg-sub-wash"
          bottom={
            <>
              <span className="flex flex-1 flex-col">
                <span className="text-[11px] text-ink-3">预估金额（合计）</span>
                <C_sP value={"半天" === s ? "320.00" : "560.00"} />
              </span>
              <C_sp onClick={() => e("payment")}>提交订单</C_sp>
            </>
          }
        >
          <C_sc className="flex items-center gap-3">
            <span className="relative size-12 overflow-hidden rounded-2xl bg-brand-mist">
              <eW.Image src="/images/escort.png" alt="" fill={!0} sizes="48px" className="object-cover" />
            </span>
            <span className="text-[15px] font-bold text-ink">医院就诊全程陪诊</span>
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-ink-2">服务时长</span>
              <C_sw
                items={["半天", "整天"]}
                value={s}
                onChange={t}
                render={(e) => (
                  <>
                    <span>{e}</span>
                    <span className="text-xs text-danger">¥{"半天" === e ? 320 : 560}</span>
                  </>
                )}
              />
            </div>
            <C_sv label="陪诊日期（仅可选择未来 7 天内）" />
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-ink">是否需要接送</span>
                <span className="text-xs text-ink-3">需要则使用已认证房号</span>
              </span>
              <C_sg defaultOn={!0} label="是否需要接送" onChange={a} />
            </div>
            {l ? <C_su label="陪诊地址" defaultValue="阳光花园 3栋2单元1802" readOnly={!0} /> : null}
            <C_su label="医院地址" placeholder="请输入医院" required={!0} />
            <C_su label="备注" placeholder="请输入病情或其他需求（0/500）" textarea={!0} />
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_sk max={6} hint="请上传病情或就医相关资料图片（最多 6 张）" />
            <C_sk kind="video" max={1} hint="请上传病情或就医相关视频（最多 1 个）" />
          </C_sc>
          <C_sz>
            当前订单金额为预估金额，附加费为陪诊人员垫付的挂号费、打车费等，以实际陪诊服务中发生金额为准，若有对应金额陪诊人员在订单完成时会提交缴费凭证
          </C_sz>
        </C_si>
      );
    },
    trusteeship: function () {
      let { go: e } = o();
      return (
        <C_si title="托管服务" className="bg-sub-wash">
          <div className="bg-hero-wash shadow-float relative flex h-32 items-center overflow-hidden rounded-[24px] px-5 text-surface">
            <span className="flex flex-col gap-1">
              <span className="text-xl font-bold">安心托付</span>
              <span className="text-xs opacity-90">课后 · 周末 · 节假日 单日随约随托</span>
            </span>
            <span className="absolute right-0 bottom-0 h-32 w-36">
              <eW.Image src="/images/trust.png" alt="" fill={!0} sizes="144px" className="object-contain" />
            </span>
          </div>
          {tl.map(([s, t, l]) => (
            <C_sc key={s} onClick={() => e("trustDetail")} className="flex items-center gap-3">
              <span className="relative size-16 shrink-0 overflow-hidden rounded-2xl bg-brand-mist">
                <eW.Image src="/images/trust.png" alt="" fill={!0} sizes="64px" className="object-cover" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-[15px] font-bold text-ink">{s}</span>
                <span className="text-xs text-ink-2">{t}</span>
              </span>
              <C_sP value={l} from={!0} />
            </C_sc>
          ))}
        </C_si>
      );
    },
    trustDetail: function () {
      let { go: e } = o();
      return (
        <C_si
          title="托管详情"
          className="bg-sub-wash"
          bottom={
            <>
              <span className="flex flex-1 flex-col">
                <span className="text-[11px] text-ink-3">预估金额</span>
                <C_sP value="50.00" />
              </span>
              <C_sp onClick={() => e("payment")}>提交订单</C_sp>
            </>
          }
        >
          <C_s3
            img="/images/trust.png"
            title="禄口一小课后托管"
            desc="工作日课后看护 · 单日预约"
            price={<C_sP value="45" from={!0} />}
          />
          <C_s5 rating="4.9" served="2.3k+" good="97%" />
          <C_s4 />
          <C_sc className="flex flex-col gap-4">
            <C_sd>预约信息</C_sd>
            <div className="flex items-center justify-between">
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-ink">孩子数量</span>
                <span className="text-xs text-ink-3">按孩子数量计费 · 1 - 5 人</span>
              </span>
              <C_sN />
            </div>
            {["是否需要送", "是否需要接", "是否需要看护"].map((e, s) => (
              <div key={e} className="flex items-center justify-between">
                <span className="text-sm text-ink">{e}</span>
                <C_sg defaultOn={0 !== s} label={e} />
              </div>
            ))}
            <C_su label="联系电话" defaultValue="13800006688" type="tel" />
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_sd>接送设置</C_sd>
            <C_sf label="接 · 学校（从学校送到家里）" placeholder="请选择学校" />
            <C_sf label="接 · 时间" placeholder="请选择接孩子的时间" />
            <C_su label="接送地址" defaultValue="阳光花园 3栋2单元1802" readOnly={!0} />
            <C_sv />
          </C_sc>
          <C_sz>预估金额为单次最高金额，实际费用以服务结束后的结算金额为准</C_sz>
        </C_si>
      );
    },
    meal: function () {
      let { go: e } = o(),
        [s, t] = (0, c.useState)("午餐"),
        [l, a] = (0, c.useState)({}),
        [n, r] = (0, c.useState)(!0),
        x = ta.reduce((e, s, t) => e + (l[t] ?? 0) * s.p, 0),
        d = x > 0 && n ? 3 : 0;
      return (
        <C_si
          title="健康膳食"
          className="bg-sub-wash"
          bottom={
            <>
              <span className="flex flex-1 flex-col">
                <span className="text-[11px] text-ink-3">预估金额</span>
                <C_sP value={(x + d).toFixed(2)} />
              </span>
              <C_sp variant={x ? "primary" : "ghost"} onClick={() => x && e("payment")}>
                {x ? "提交订单" : "请选择套餐"}
              </C_sp>
            </>
          }
        >
          <C_sc onClick={() => e("mealDetail")} className="bg-hero-wash flex items-center gap-3 text-surface">
            <span className="flex flex-1 flex-col gap-1">
              <span className="text-xs opacity-90">今日菜单</span>
              <span className="text-lg font-bold">
                {"9月5日 周六 · "}
                {s}
              </span>
              <span className="text-xs opacity-90">营养师 + 三星主厨联合研发</span>
            </span>
            <C_e$ className="size-5" />
          </C_sc>
          <C_sw
            items={["早餐", "午餐", "晚餐"]}
            value={s}
            onChange={t}
            render={(e) => (
              <>
                <span>{e}</span>
                <span className="text-[11px] text-ink-3">
                  ¥{"早餐" === e ? 6 : "午餐" === e ? 18 : 16}
                  {" 起"}
                </span>
              </>
            )}
          />
          <C_sx title="可选套餐" />
          {ta.map((e, s) => (
            <C_sc key={e.n} className="flex items-center gap-3 p-3">
              <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-brand-mist">
                <eW.Image src={e.img} alt={e.n} fill={!0} sizes="80px" className="object-cover" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-sm font-bold text-ink">{e.n}</span>
                <C_sh tone="teal" className="w-fit">
                  {e.d}
                </C_sh>
                <span className="mt-1 flex items-center justify-between">
                  <span className="flex items-baseline gap-0.5">
                    <C_sP value={String(e.p)} size="sm" />
                    <span className="text-[11px] text-ink-3">/ 份</span>
                  </span>
                  <span className="flex items-center gap-2">
                    {l[s] ? (
                      <>
                        <button
                          type="button"
                          aria-label="减少"
                          onClick={() =>
                            a({
                              ...l,
                              [s]: l[s] - 1,
                            })
                          }
                          className="press flex size-7 items-center justify-center rounded-full bg-fill text-ink-2"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm font-bold tabular-nums">{l[s]}</span>
                      </>
                    ) : null}
                    <button
                      type="button"
                      aria-label="增加"
                      onClick={() =>
                        a({
                          ...l,
                          [s]: (l[s] ?? 0) + 1,
                        })
                      }
                      className="press bg-brand-gradient flex size-7 items-center justify-center rounded-full text-surface"
                    >
                      +
                    </button>
                  </span>
                </span>
              </span>
            </C_sc>
          ))}
          <C_sc className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-ink">是否需要配送</span>
                <span className="text-xs text-ink-3">配送至已认证房号</span>
              </span>
              <C_sg defaultOn={!0} label="是否需要配送" onChange={r} />
            </div>
            <C_sm k="套餐小计" v={x ? `\xa5${x.toFixed(2)}` : "尚未选择套餐"} />
            <C_sm k="配送费" v={`\xa5${d.toFixed(2)}`} />
            <C_su label="联系电话" defaultValue="13800006688" type="tel" />
          </C_sc>
          <C_tr />
        </C_si>
      );
    },
    mealDetail: function () {
      let { go: e } = o();
      return (
        <C_si
          title="膳食详情"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("meal")}>
              立即报餐
            </C_sp>
          }
        >
          <C_s3
            img="/images/meal-fish.png"
            title="适老营养餐"
            tag="推荐"
            desc="由营养师 + 三星主厨联合研发 · 每日新鲜配送"
            price={
              <span className="flex items-baseline gap-0.5">
                <C_sP value="18" />
                <span className="text-xs text-ink-3">/ 份</span>
              </span>
            }
          />
          <C_s5 rating="4.8" served="1.2k+" good="98%" />
          <C_sz>点击「立即报餐」开始下单 · 各餐别下单 / 取消截止时间详见下单页说明</C_sz>
          <C_s4 />
          <C_sc>
            <C_sd>膳食详情</C_sd>
            <p className="text-[13px] leading-relaxed text-ink-2">
              由营养师 +
              三星酒店主厨联合研发的适老营养餐，针对老年人慢病调理、术后恢复与日常养生需求，提供低油低盐、软烂易嚼、营养均衡的搭配方案。
            </p>
          </C_sc>
          <C_sc>
            <C_sd>菜单组成</C_sd>
            <C_s6
              items={[
                "主菜：清蒸鲈鱼 / 香菇滑鸡 / 红烧排骨 / 番茄炖牛腩（每日轮换）",
                "配菜：清炒时蔬 2 份 / 凉拌木耳 / 蒜蓉西兰花",
                "主食：软米饭 / 杂粮饭 / 小米粥（三选一）",
                "汤品：紫菜蛋花汤 / 莲藕排骨汤 / 山药排骨汤",
              ]}
            />
          </C_sc>
          <C_sc className="flex gap-3 bg-success-soft">
            <C_s0 className="size-5 shrink-0 text-success" />
            <span className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-ink">营养参考</span>
              <span className="text-xs leading-relaxed text-ink-2">
                单餐热量控制在 450 - 600 kcal，蛋白质 ≥ 18g，钠 ≤ 800mg，适合高血压 / 糖尿病慢病食谱。
              </span>
            </span>
          </C_sc>
          <C_sc>
            <C_sd>本周菜单</C_sd>
            <div className="overflow-hidden rounded-2xl bg-fill text-[13px]">
              {[
                ["日期", "主菜", "主食", "汤品"],
                ["周一", "香菇滑鸡", "软米饭", "紫菜蛋花汤"],
                ["周二", "红烧排骨", "杂粮饭", "莲藕排骨汤"],
                ["周三", "清蒸鲈鱼", "软米饭", "山药排骨汤"],
                ["周四", "番茄炖牛腩", "杂粮饭", "紫菜蛋花汤"],
                ["周五", "香菇滑鸡", "小米粥", "莲藕排骨汤"],
                ["周六", "清蒸鲈鱼", "软米饭", "山药排骨汤"],
                ["周日", "红烧排骨", "杂粮饭", "紫菜蛋花汤"],
              ].map((e, s) => (
                <div
                  key={e[0]}
                  className={eb(
                    "grid grid-cols-[3rem_1fr_1fr_1.3fr] gap-2 px-3 py-2",
                    0 === s ? "bg-brand-soft font-semibold text-brand-ink" : "border-t border-surface text-ink-2",
                  )}
                >
                  {e.map((e) => (
                    <span key={e}>{e}</span>
                  ))}
                </div>
              ))}
            </div>
          </C_sc>
          <C_sc>
            <C_sd>食材溯源</C_sd>
            <p className="text-[13px] leading-relaxed text-ink-2">
              所有食材均由物业直采，每日检测留样，确保新鲜安全、来源可追溯。
            </p>
          </C_sc>
        </C_si>
      );
    },
    miniJump: function () {
      let { back: e, toast: s } = o();
      return (
        <C_si title="跳转中" className="bg-sub-wash gap-5">
          <div className="flex flex-col items-center gap-3 pt-8 text-center">
            <span className="bg-brand-gradient shadow-float flex size-20 items-center justify-center rounded-[26px] text-surface">
              <C_sT className="size-9" />
            </span>
            <p className="text-xl font-bold text-ink">已打开 物业服务系统</p>
            <p className="text-sm text-ink-2">若小程序未自动弹出，可下拉通知栏手动进入</p>
          </div>
          <C_sc>
            <C_sm k="小程序名称" v="物业服务系统" />
            <C_sm k="打开方式" v="APP 内跳转" />
            <C_sm k="状态" v={<C_sh tone="teal">已成功跳转</C_sh>} />
          </C_sc>
          <C_sp block={!0} onClick={e}>
            返回 顾好家
          </C_sp>
          <C_sp block={!0} variant="ghost" onClick={() => s("暂无更多跳转记录")}>
            查看跳��记录
          </C_sp>
        </C_si>
      );
    },
    helperList: function () {
      let { go: e } = o();
      return (
        <C_si title="生活帮手" className="bg-sub-wash">
          <div className="grid grid-cols-2 gap-3">
            {ti.map(([s, t, l]) => (
              <C_sc key={s} onClick={() => e("helperInfo")} className="flex flex-col gap-2 p-3">
                <span className="relative h-24 w-full overflow-hidden rounded-2xl bg-brand-mist">
                  <eW.Image
                    src="/images/svc-helper.png"
                    alt=""
                    fill={!0}
                    sizes="160px"
                    className="object-contain p-2"
                  />
                </span>
                <span className="text-[15px] font-bold text-ink">{s}</span>
                <span className="line-clamp-2 min-h-8 text-[11px] leading-relaxed text-ink-2">{t}</span>
                <C_sP value={l} size="sm" from={!0} />
              </C_sc>
            ))}
          </div>
        </C_si>
      );
    },
    helperInfo: function () {
      let { go: e } = o();
      return (
        <C_si
          title="服务详情"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("helper")}>
              立即预约
            </C_sp>
          }
        >
          <C_s3
            img="/images/svc-helper.png"
            title="家政保洁"
            desc="全屋深度清洁 · 含厨卫除污"
            price={<C_sP value="180" from={!0} />}
          />
          <C_sc>
            <C_sd>服务详情</C_sd>
            <p className="text-[13px] leading-relaxed text-ink-2">
              由物业认证保洁人员上门服务，覆盖日常清扫、厨房除油、卫浴除污、玻璃擦拭等场景，工具与清洁剂均由服务方提供。
            </p>
          </C_sc>
          <C_sc>
            <C_sd>服务内容</C_sd>
            <C_s6
              items={[
                "全屋清扫：地面、桌面、家具表面除尘擦拭",
                "厨卫除污：油烟机、瓷砖、马桶深度清洁",
                "玻璃擦拭：门窗玻璃内外清洁",
              ]}
            />
          </C_sc>
          <C_sc>
            <C_sd>服务说明</C_sd>
            <C_s6 items={["服务前确认范围，服务后由您验收签字", "面积约 90㎡ 内为标准单，超面积按补充协议计费"]} />
          </C_sc>
        </C_si>
      );
    },
    helper: function () {
      let { go: e, toast: s } = o();
      return (
        <C_si
          title="提交服务订单"
          className="bg-sub-wash"
          bottom={
            <>
              <span className="flex flex-1 flex-col">
                <span className="text-[11px] text-ink-3">订单金额（预估）</span>
                <C_sP value="180.00" />
              </span>
              <C_sp
                onClick={() => {
                  (s("订单已提交"), e("ordersHelper"));
                }}
              >
                提交订单
              </C_sp>
            </>
          }
        >
          <C_sc className="flex items-center gap-3">
            <span className="relative size-12 overflow-hidden rounded-2xl bg-brand-mist">
              <eW.Image src="/images/svc-helper.png" alt="" fill={!0} sizes="48px" className="object-contain p-1" />
            </span>
            <span className="flex flex-1 flex-col">
              <span className="text-[15px] font-bold text-ink">家政保洁</span>
              <span className="text-xs text-ink-2">全屋深度清洁 · 含厨卫除污</span>
            </span>
            <C_sP value="180" size="sm" />
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_sf label="上门时间" placeholder="请选择上门服务时间" required={!0} />
            <C_su label="服务地址" defaultValue="阳光花园 3栋2单元1802" readOnly={!0} />
            <C_su label="联系电话" defaultValue="13800006688" type="tel" />
            <C_su label="备注" placeholder="请描述服务需求" textarea={!0} />
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_sk max={6} hint="请上传服务需求相关图片（最多 6 张）" />
            <C_sk kind="video" max={1} hint="请上传服务需求相关视频（最多 1 个）" />
          </C_sc>
          <C_sz>仅为预估金额，具体费用与线下服务人员沟通，系统不收取费用</C_sz>
        </C_si>
      );
    },
    callMine: function () {
      let { toast: e } = o(),
        s = [
          {
            n: "物业中心",
            p: "0551-8888****",
            icon: sX,
            red: !1,
          },
          {
            n: "急救中心",
            p: "120",
            icon: C_s1,
            red: !0,
          },
        ];
      return (
        <C_si title="一键呼叫" className="bg-sub-wash">
          {s.map((s) => (
            <C_sc key={s.n} className="flex flex-col items-center gap-4 py-6">
              <span
                className={eb(
                  "flex size-16 items-center justify-center rounded-full",
                  s.red ? "bg-danger-soft text-danger" : "bg-brand-soft text-brand-deep",
                )}
              >
                <s.icon className="size-8" />
              </span>
              <span className="flex flex-col items-center gap-1">
                <span className="text-lg font-bold text-ink">{s.n}</span>
                <span className="text-sm text-ink-2 tabular-nums">{s.p}</span>
              </span>
              <button
                type="button"
                onClick={() => e(`正在呼叫${s.n}`)}
                className={eb(
                  "press shadow-soft h-12 w-full rounded-full text-base font-semibold text-surface",
                  s.red ? "bg-danger" : "bg-brand-gradient",
                )}
              >
                呼叫{s.n}
              </button>
            </C_sc>
          ))}
          <C_sC>号码由物业后台配置 · 未认证用户无小区归属，无法使用</C_sC>
        </C_si>
      );
    },
  };
var eW = eW;
let C_tx = ew("briefcase-business", [
    [
      "path",
      {
        d: "M12 12h.01",
        key: "1mp3jc",
      },
    ],
    [
      "path",
      {
        d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
        key: "1ksdt3",
      },
    ],
    [
      "path",
      {
        d: "M22 13a18.15 18.15 0 0 1-20 0",
        key: "12hx5q",
      },
    ],
    [
      "rect",
      {
        width: "20",
        height: "14",
        x: "2",
        y: "6",
        rx: "2",
        key: "i6l2r4",
      },
    ],
  ]),
  C_td = ew("clock", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay",
      },
    ],
    [
      "path",
      {
        d: "M12 6v6l4 2",
        key: "mmk7yg",
      },
    ],
  ]),
  C_to = ew("funnel", [
    [
      "path",
      {
        d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
        key: "sc7q7i",
      },
    ],
  ]),
  tm = ew("newspaper", [
    [
      "path",
      {
        d: "M15 18h-5",
        key: "95g1m2",
      },
    ],
    [
      "path",
      {
        d: "M18 14h-8",
        key: "sponae",
      },
    ],
    [
      "path",
      {
        d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
        key: "39pd36",
      },
    ],
    [
      "rect",
      {
        width: "8",
        height: "4",
        x: "10",
        y: "6",
        rx: "1",
        key: "aywv1n",
      },
    ],
  ]),
  C_tp = ew("wallet", [
    [
      "path",
      {
        d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
        key: "18etb6",
      },
    ],
    [
      "path",
      {
        d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
        key: "xoc0q4",
      },
    ],
  ]);
function C_th() {
  let { go: e } = o();
  return (
    <button
      type="button"
      onClick={() => e("sysMsg")}
      aria-label="消息通知，3 条未读"
      className="press shadow-card relative flex size-10 items-center justify-center rounded-full bg-surface"
    >
      <C_eH className="size-5 text-ink" strokeWidth={1.8} />
      <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-semibold text-surface">
        3
      </span>
    </button>
  );
}
function C_tu({ title: e, sub: s, extra: t }) {
  return (
    <div className="flex items-center justify-between px-1 pt-2 pb-1">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-[24px] font-bold text-ink">{e}</h1>
        {s ? <p className="text-xs text-ink-2">{s}</p> : null}
      </div>
      <div className="flex gap-2">
        {t}
        <C_th />
      </div>
    </div>
  );
}
let tf = [
    {
      t: "中秋邻里联欢会",
      p: "09-05 至 09-26",
      s: "报名中",
      img: "/images/act-midautumn.png",
    },
    {
      t: "幼儿阅读营",
      p: "09-01 至 09-12",
      s: "报名中",
      img: "/images/act-reading.png",
    },
    {
      t: "重阳节健康讲座",
      p: "09-10 至 09-27",
      s: "即将开始",
      img: "/images/svc-health.png",
    },
    {
      t: "邻里跳蚤市场",
      p: "09-02 至 09-10",
      s: "报名中",
      img: "/images/act-market.png",
    },
    {
      t: "秋季健步走",
      p: "09-08 至 09-23",
      s: "报名中",
      img: "/images/act-walk.png",
    },
    {
      t: "重阳敬老慰问",
      p: "09-12 至 09-28",
      s: "即将开始",
      img: "/images/svc-care.png",
    },
    {
      t: "暑期趣味运动会",
      p: "08-01 至 08-18",
      s: "已结束",
      img: "/images/act-walk.png",
    },
  ],
  tj = {
    报名中: "brand",
    即将开始: "warm",
    已结束: "gray",
  },
  tb = [
    {
      t: "关于本周六小区供水检修",
      time: "09-04 09:00",
      tag: "请提前储水",
      unread: !0,
    },
    {
      t: "电梯年检停梯通知",
      time: "09-02 16:00",
      tag: "3栋2单元",
      unread: !0,
    },
    {
      t: "中秋节物业值班安排",
      time: "09-01 10:20",
      tag: "",
      unread: !1,
    },
    {
      t: "社区健康小屋开放时间调整",
      time: "08-30 09:00",
      tag: "健康小屋",
      unread: !1,
    },
    {
      t: "关于小区垃圾分类投放点调整",
      time: "08-28 15:40",
      tag: "",
      unread: !1,
    },
  ],
  tg = [
    {
      t: "垃圾分类新指南来了",
      d: "了解四分类标准，共建整洁小区",
      m: "09-03 · 物业服务中心",
      img: "/images/article-recycle.png",
    },
    {
      t: "秋季养生小贴士",
      d: "适老饮食与起居建议",
      m: "09-01 · 健康小屋",
      img: "/images/meal-fish.png",
    },
    {
      t: "小区停车位改造进展说明",
      d: "新增 60 个车位，预计月底完工",
      m: "08-28 · 物业服务中心",
      img: "/images/banner-1.png",
    },
  ],
  tN = {
    community: function () {
      let { go: e } = o(),
        s = [
          {
            t: "社区通知",
            d: "物业公告、停水停电提醒",
            to: "noticeList",
            icon: C_eB,
            badge: 2,
          },
          {
            t: "精彩内容",
            d: "小区资讯、生活指南",
            to: "featuredList",
            icon: tm,
          },
        ];
      return (
        <C_si tab={!0} className="bg-sub-wash">
          <C_tu title="社区" sub="阳光花园 · 邻里有温度" />
          <C_sc onClick={() => e("communityList")} className="relative h-40 overflow-hidden p-0">
            <eW.Image src="/images/act-midautumn.png" alt="" fill={!0} sizes="343px" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-[#3a230c]/75 to-transparent" />
            <span className="absolute inset-x-4 bottom-4 flex items-end justify-between text-surface">
              <span className="flex flex-col gap-1">
                <span className="text-lg font-bold">社区活动</span>
                <span className="text-xs opacity-90">报名邻里活动，查看最新动态</span>
              </span>
              <span className="bg-brand-gradient rounded-full px-3 py-1.5 text-xs font-semibold">去报名</span>
            </span>
          </C_sc>
          <div className="grid grid-cols-2 gap-3">
            {s.map((s) => (
              <C_sc key={s.t} onClick={() => e(s.to)} className="relative flex flex-col gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                  <s.icon className="size-5" />
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-bold text-ink">{s.t}</span>
                  <span className="text-[11px] leading-relaxed text-ink-2">{s.d}</span>
                </span>
                {s.badge ? (
                  <span className="absolute top-3 right-3 flex size-5 items-center justify-center rounded-full bg-danger text-[11px] font-semibold text-surface">
                    {s.badge}
                  </span>
                ) : null}
              </C_sc>
            ))}
          </div>
          <h2 className="px-1 pt-2 text-[15px] font-bold text-ink">小区公开信息</h2>
          <C_sc onClick={() => e("moneyBag")} className="flex items-center gap-3">
            <span className="relative size-12 overflow-hidden rounded-2xl bg-brand-mist">
              <eW.Image src="/images/svc-wallet.png" alt="" fill={!0} sizes="48px" className="object-cover" />
            </span>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-[15px] font-bold text-ink">小区钱袋子</span>
              <span className="text-xs text-ink-2">公共收支透明公示</span>
            </span>
            <C_e$ className="size-4 text-ink-3" />
          </C_sc>
          <C_sc onClick={() => e("hr")} className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-success-soft text-success">
              <C_tx className="size-6" />
            </span>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-[15px] font-bold text-ink">人力资源</span>
              <span className="text-xs text-ink-2">人才入驻 · 技能服务派单</span>
            </span>
            <C_e$ className="size-4 text-ink-3" />
          </C_sc>
        </C_si>
      );
    },
    communityList: function () {
      let { go: e } = o(),
        [s, t] = (0, c.useState)("全部"),
        l = tf.filter((e) => "全部" === s || e.s === s);
      return (
        <C_si
          className="bg-sub-wash"
          nav={
            <C_sr title="社区活动" right={<C_to className="size-5 text-ink" />} onRight={() => e("activityFilter")} />
          }
        >
          <C_sj items={["全部", "���将开始", "报名中", "已结束"]} value={s} onChange={t} />
          <p className="px-1 text-xs text-ink-3">
            {"共 "}
            {l.length}
            {" 场活动"}
          </p>
          {l.map((s) => (
            <C_sc
              key={s.t}
              onClick={() => e("activityDetail")}
              className={eb("flex items-center gap-3 p-2.5", "已结束" === s.s && "opacity-70")}
            >
              <span className="relative h-[72px] w-[92px] shrink-0 overflow-hidden rounded-2xl bg-brand-mist">
                <eW.Image
                  src={s.img}
                  alt={s.t}
                  fill={!0}
                  sizes="92px"
                  className={eb("object-cover", "已结束" === s.s && "grayscale")}
                />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="truncate text-[15px] font-semibold text-ink">{s.t}</span>
                <span className="flex items-center gap-1 text-xs text-ink-2 tabular-nums">
                  <C_eq className="size-3.5 text-brand-deep" />
                  {"报名 "}
                  {s.p}
                </span>
              </span>
              <C_sh tone={tj[s.s]}>{s.s}</C_sh>
            </C_sc>
          ))}
          <C_sC>下拉刷新 · 上拉加载更多</C_sC>
        </C_si>
      );
    },
    activityFilter: function () {
      let { back: e } = o(),
        s = {
          活动状态: "全部",
          活动时间: "不限",
          活动类型: "不限",
        },
        [t, l] = (0, c.useState)(s);
      return (
        <C_si
          title="筛选活动"
          className="bg-sub-wash"
          bottom={
            <>
              <C_sp variant="ghost" onClick={() => l(s)}>
                重置筛选条件
              </C_sp>
              <C_sp block={!0} onClick={e}>
                确定
              </C_sp>
            </>
          }
        >
          {[
            ["活动状态", ["全部", "即将开始", "报名中", "已结束"]],
            ["活动时间", ["不限", "本周", "本月", "近三个月", "更早"]],
            ["活动类型", ["不限", "节日庆典", "健康讲座", "亲子活动", "志愿服务"]],
          ].map(([e, s]) => (
            <C_sc key={e}>
              <C_sd>{e}</C_sd>
              <div className="flex flex-wrap gap-2">
                {s.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() =>
                      l({
                        ...t,
                        [e]: s,
                      })
                    }
                    className={eb(
                      "press rounded-full px-4 py-2 text-[13px]",
                      t[e] === s
                        ? "bg-brand-soft font-semibold text-brand-ink ring-1 ring-brand"
                        : "bg-fill text-ink-2",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </C_sc>
          ))}
          <C_sC>支持多条件叠加筛选</C_sC>
        </C_si>
      );
    },
    activityDetail: function () {
      let { go: e } = o(),
        s = [
          {
            icon: C_td,
            l: "报名时间",
            v: "9-01 ~ 9-20",
          },
          {
            icon: C_eq,
            l: "活动时间",
            v: "9-28 18:30",
          },
          {
            icon: C_eE,
            l: "活动地点",
            v: "中心广场",
          },
          {
            icon: C_eL,
            l: "已报名人数",
            v: "86 人",
          },
        ];
      return (
        <C_si
          title="活动详情"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("activitySignup")}>
              立即报名
            </C_sp>
          }
        >
          <div className="shadow-float relative h-48 shrink-0 overflow-hidden rounded-[24px]">
            <eW.Image
              src="/images/act-midautumn.png"
              alt="中秋邻里联欢会"
              fill={!0}
              sizes="343px"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[#3a230c]/70 to-transparent" />
            <span className="absolute inset-x-4 bottom-4 flex items-center justify-between">
              <span className="text-xl font-bold text-surface">中秋邻里联欢会</span>
              <C_sh>报名中</C_sh>
            </span>
          </div>
          <C_sc className="grid grid-cols-2 gap-3">
            {s.map((e) => (
              <div key={e.l} className="flex items-center gap-2.5 rounded-2xl bg-fill p-3">
                <e.icon className="size-4 shrink-0 text-brand-deep" />
                <span className="flex flex-col">
                  <span className="text-[11px] text-ink-3">{e.l}</span>
                  <span className="text-sm font-semibold text-ink tabular-nums">{e.v}</span>
                </span>
              </div>
            ))}
          </C_sc>
          <C_sc>
            <C_sd>活动介绍</C_sd>
            <p className="text-[13px] leading-relaxed text-ink-2">
              邻里齐聚，赏月品茗，趣味游戏与才艺展示。现场设置灯谜区、手工月饼 DIY
              与儿童游乐区，欢迎携家人一同参加。活动免费，名额不限，欢迎广大业主积极参与。
            </p>
          </C_sc>
        </C_si>
      );
    },
    activitySignup: function () {
      let { replace: e, toast: s } = o();
      return (
        <C_si
          title="活动报名"
          className="bg-sub-wash"
          bottom={
            <C_sp
              block={!0}
              onClick={() => {
                (s("报名成功"), e("mySignup"));
              }}
            >
              提交报名
            </C_sp>
          }
        >
          <C_sc className="flex items-center gap-3">
            <span className="relative size-14 overflow-hidden rounded-2xl">
              <eW.Image src="/images/act-midautumn.png" alt="" fill={!0} sizes="56px" className="object-cover" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-[15px] font-bold text-ink">中秋邻里联欢会</span>
              <span className="text-xs text-ink-2">9-28 18:30 · 中心广场</span>
            </span>
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_su label="姓名" placeholder="请输入姓名" required={!0} />
            <C_su label="手机号" placeholder="请输入手机号" type="tel" required={!0} />
            <C_su label="备注" placeholder="如携带家属人数等" textarea={!0} />
          </C_sc>
        </C_si>
      );
    },
    noticeList: function () {
      let { go: e } = o();
      return (
        <C_si title="社区通知" className="bg-sub-wash">
          {tb.map((s) => (
            <C_sc key={s.t} onClick={() => e("noticeDetail")} className="flex items-center gap-3">
              <span className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                <C_eB className="size-5" />
                {s.unread ? (
                  <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-danger ring-2 ring-surface" />
                ) : null}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="truncate text-[15px] font-semibold text-ink">{s.t}</span>
                <span className="text-xs text-ink-3 tabular-nums">
                  {s.time}
                  {s.tag ? ` \xb7 ${s.tag}` : ""}
                </span>
              </span>
              <C_e$ className="size-4 text-ink-3" />
            </C_sc>
          ))}
        </C_si>
      );
    },
    noticeDetail: function () {
      return (
        <C_si title="通知详情" className="bg-sub-wash">
          <C_sc className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <C_sh tone="red" className="w-fit">
                公告
              </C_sh>
              <h2 className="text-lg leading-snug font-bold text-ink">关于本周六小区供水检修的通知</h2>
              <p className="text-xs text-ink-3">物业服务中心 · 09-04 09:00</p>
            </div>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-ink-2">
              <p>各位业主：</p>
              <p>
                {"因供水主管道例行检修，本周六（9月6日）上午 "}
                <b className="text-ink">8:00 至下午 17:00</b>{" "}
                期间，小区将暂停供水。请各位业主提前储备生活用水，并关闭水龙头阀门，以免恢复供水时发生溢水。
              </p>
              <p>检修完成后将立即恢复供水，如遇特殊情况将另行通知。给您带来不便，敬请谅解。</p>
              <p className="text-right">物业服务中心</p>
            </div>
          </C_sc>
          <C_sC>左右滑动可切换其他通知</C_sC>
        </C_si>
      );
    },
    featuredList: function () {
      let { go: e } = o(),
        [s, ...t] = tg;
      return (
        <C_si title="小区资讯" className="bg-sub-wash">
          <C_sc onClick={() => e("articleDetail")} className="flex flex-col gap-3 p-0">
            <span className="relative block h-40 overflow-hidden rounded-t-[20px]">
              <eW.Image src={s.img} alt={s.t} fill={!0} sizes="343px" className="object-cover" />
            </span>
            <span className="flex flex-col gap-1 px-4 pb-4">
              <span className="text-base font-bold text-ink">{s.t}</span>
              <span className="text-xs text-ink-2">{s.d}</span>
              <span className="text-[11px] text-ink-3">{s.m}</span>
            </span>
          </C_sc>
          {t.map((s) => (
            <C_sc key={s.t} onClick={() => e("articleDetail")} className="flex gap-3 p-3">
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="text-[15px] font-bold text-ink">{s.t}</span>
                <span className="text-xs text-ink-2">{s.d}</span>
                <span className="mt-auto text-[11px] text-ink-3">{s.m}</span>
              </span>
              <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl">
                <eW.Image src={s.img} alt={s.t} fill={!0} sizes="96px" className="object-cover" />
              </span>
            </C_sc>
          ))}
          <C_sC>下拉刷新 · 上拉加载更多</C_sC>
        </C_si>
      );
    },
    articleDetail: function () {
      return (
        <C_si title="资讯详情" className="bg-sub-wash">
          <div className="shadow-card relative h-44 shrink-0 overflow-hidden rounded-[24px]">
            <eW.Image
              src="/images/article-recycle.png"
              alt="垃圾分类"
              fill={!0}
              sizes="343px"
              className="object-cover"
            />
          </div>
          <C_sc className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-ink">垃圾分类新指南来了</h2>
            <p className="text-xs text-ink-3">09-03 · 物业服务中心</p>
            <p className="text-sm leading-relaxed text-ink-2">为推进小区垃圾分类工作，现将四分类标准说明如下：</p>
            <div className="flex flex-col gap-2">
              {[
                ["可回收物", "废纸、塑料瓶、金属罐、旧衣物等，请投放至蓝色桶。"],
                ["厨余垃圾", "剩菜剩饭、果皮、菜叶等，请沥干水分后投放至绿色桶。"],
                ["有害垃圾", "废电池、废灯管、过期药品等，请投放至红色桶。"],
                ["其他垃圾", "除上述三类以外的生活垃圾，投放至灰色桶。"],
              ].map(([e, s]) => (
                <div key={e} className="flex flex-col gap-0.5 rounded-2xl bg-fill p-3">
                  <span className="text-sm font-semibold text-ink">{e}</span>
                  <span className="text-xs leading-relaxed text-ink-2">{s}</span>
                </div>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-ink-2">
              物业将于每日 7:00-9:00、18:00-20:00 安排督导员在投放点值守，感谢各位业主的配合与支持。
            </p>
          </C_sc>
        </C_si>
      );
    },
    moneyBag: function () {
      let { toast: e } = o(),
        [s, t] = (0, c.useState)("物业钱袋子");
      return (
        <C_si title="小区钱袋子" className="bg-sub-wash">
          <div className="bg-hero-wash shadow-float flex flex-col gap-4 rounded-[24px] p-5 text-surface">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">2026年8月</span>
              <C_tp className="size-5 opacity-80" />
            </div>
            <span className="flex flex-col">
              <span className="text-xs opacity-90">本月结余</span>
              <span className="text-3xl font-bold tabular-nums">¥12,580</span>
            </span>
            <div className="grid grid-cols-2 rounded-2xl bg-surface/20 py-2.5 text-center">
              <span className="flex flex-col">
                <span className="text-[11px] opacity-90">收入</span>
                <span className="font-bold tabular-nums">+8,600</span>
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] opacity-90">支出</span>
                <span className="font-bold tabular-nums">-3,200</span>
              </span>
            </div>
          </div>
          <C_sj items={["物业钱袋子", "膳食钱袋子", "托管钱袋子"]} value={s} onChange={t} />
          <C_sc className="py-1">
            <div className="pt-3">
              <C_sd>收支明细</C_sd>
            </div>
            {[
              ["公共电费", "08-31", "-1,200"],
              ["电梯维保费", "08-28", "-2,000"],
              ["停车费收入", "08-25", "+5,200"],
              ["广告位租金", "08-20", "+2,400"],
              ["充电桩服务费", "08-18", "+1,000"],
            ].map(([s, t, l]) => (
              <button
                key={s}
                type="button"
                onClick={() => e("凭证预览")}
                className="press flex w-full items-center gap-3 border-t border-hairline py-3 text-left first:border-t-0"
              >
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">{s}</span>
                  <span className="text-xs text-ink-3">
                    {t}
                    {" · 点击查看凭证"}
                  </span>
                </span>
                <span
                  className={eb("text-base font-bold tabular-nums", l.startsWith("+") ? "text-success" : "text-ink")}
                >
                  {l[0]}¥{l.slice(1)}
                </span>
              </button>
            ))}
          </C_sc>
        </C_si>
      );
    },
  };
var eW = eW;
let C_tk = ew("image", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    [
      "circle",
      {
        cx: "9",
        cy: "9",
        r: "2",
        key: "af1f0g",
      },
    ],
    [
      "path",
      {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
        key: "1xmnt7",
      },
    ],
  ]),
  ty = {
    meal: {
      name: "报餐单",
      sub: "报餐订单 · 营养到家",
      screen: "orders",
      detail: "orderMealDetail",
      cnt: [0, 1, 2, 1],
    },
    trust: {
      name: "托管单",
      sub: "托管订单 · 安心托付",
      screen: "ordersTrust",
      detail: "orderTrustDetail",
      cnt: [0, 1, 1, 1],
    },
    escort: {
      name: "陪诊单",
      sub: "陪诊订单 · 暖心陪伴",
      screen: "ordersEscort",
      detail: "orderEscortDetail",
      cnt: [1, 0, 1, 1],
    },
    helper: {
      name: "生活帮手单",
      sub: "生活帮手订单 · 上门服务",
      screen: "ordersHelper",
      detail: "orderHelperDetail",
      cnt: [0, 1, 1, 1],
    },
  },
  tv = {
    meal: [
      {
        code: "BC20250904-001",
        status: "进行中",
        title: "午餐× 2",
        use: "09-05",
        submit: "09-04 10:20",
        count: "共 2 份订单",
        price: "36.00",
      },
      {
        code: "BC20250902-008",
        status: "已完成",
        title: "昨日午餐",
        use: "09-03",
        submit: "09-02 11:05",
        count: "共 1 份订单",
        price: "18.00",
      },
      {
        code: "BC20250903-004",
        status: "已取消",
        title: "午餐 · 1 份",
        use: "09-04",
        submit: "09-03 09:40",
        count: "共 1 份订单",
        price: "18.00",
      },
      {
        code: "BC20250901-002",
        status: "已完成",
        title: "今日晚餐× 2",
        use: "09-01",
        submit: "08-31 17:30",
        count: "共 2 份订单",
        price: "36.00",
      },
    ],
    trust: [
      {
        code: "TG20250901-003",
        status: "进行中",
        title: "禄口一小课后托管",
        use: "09-05",
        submit: "09-01 09:00",
        count: "共 1 份订单",
        price: "45.00",
      },
      {
        code: "TG20250701-011",
        status: "已取消",
        title: "周末全天托管",
        use: "07-05",
        submit: "07-01 15:20",
        count: "共 1 份订单",
        price: "90.00",
      },
      {
        code: "TG20250601-005",
        status: "已完成",
        title: "周末半日托管",
        use: "06-06",
        submit: "05-28 14:00",
        count: "共 1 份订单",
        price: "45.00",
      },
    ],
    escort: [
      {
        code: "PZ20250903-002",
        status: "待支付",
        title: "医院就诊全程陪诊 · 半天",
        use: "09-05 09:00",
        submit: "09-03 16:00",
        price: "240.00",
      },
      {
        code: "PZ20250820-006",
        status: "已完成",
        title: "体检陪诊 · 整天",
        use: "08-22 08:30",
        submit: "08-20 10:30",
        price: "160.00",
        old: "180.00",
      },
      {
        code: "PZ20250805-001",
        status: "已取消",
        title: "老人复诊陪诊 · 半天",
        use: "08-06 09:30",
        submit: "08-05 19:20",
        price: "320.00",
      },
    ],
    helper: [
      {
        code: "SH20250904-001",
        status: "进行中",
        title: "家政保洁 · 全屋深度清洁",
        use: "09-05 09:00",
        submit: "09-04 15:30",
        count: "共 1 份订单",
        price: "180.00",
      },
      {
        code: "SH20250902-003",
        status: "已完成",
        title: "空调维修 · 挂机加氟",
        use: "09-02 14:00",
        submit: "09-01 20:10",
        count: "共 1 份订单",
        price: "260.00",
      },
      {
        code: "SH20250828-002",
        status: "已取消",
        title: "水电维修 · 厨房水管更换",
        use: "08-29 10:00",
        submit: "08-28 09:20",
        count: "共 1 份订单",
        price: "150.00",
      },
    ],
  },
  tw = {
    进行中: "brand",
    已完成: "teal",
    已取消: "gray",
    待支付: "red",
  };
function C_tz({ kind: e }) {
  let { go: s, replace: t, cur: l } = o(),
    a = ty[e],
    n = tv[e],
    r = ["全部", ...Array.from(new Set(n.map((e) => e.status)))],
    [x, d] = (0, c.useState)("全部"),
    m = n.filter((e) => "全部" === x || e.status === x);
  return (
    <C_si tab={!0} className="bg-sub-wash">
      <C_tu
        title="订单"
        sub={a.sub}
        extra={
          <button
            type="button"
            aria-label="搜索订单"
            onClick={() => s("orderSearch")}
            className="press shadow-card flex size-10 items-center justify-center rounded-full bg-surface"
          >
            <C_eV className="size-5 text-ink" strokeWidth={1.8} />
          </button>
        }
      />
      <div className="bg-hero-wash shadow-float flex flex-col gap-4 rounded-[24px] p-4 text-surface">
        <div className="flex items-center justify-between">
          <span className="flex flex-col">
            <span className="text-xs opacity-90">本月服务订单</span>
            <span className="text-2xl font-bold tabular-nums">
              {"总计 "}
              {n.length}
              {" 单"}
            </span>
          </span>
          <button
            type="button"
            onClick={() => s("orderSettlement")}
            className="press rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-brand-deep"
          >
            订单结算
          </button>
        </div>
        <div className="grid grid-cols-4 rounded-2xl bg-surface/20 py-2.5">
          {["待支付", "进行中", "已完成", "取消/退款"].map((e, s) => (
            <span key={e} className="flex flex-col items-center gap-0.5">
              <span className="text-lg font-bold tabular-nums">{a.cnt[s]}</span>
              <span className="text-[11px] opacity-90">{e}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {Object.keys(ty).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => ty[s].screen !== l && t(ty[s].screen)}
            className={eb(
              "press rounded-2xl py-2.5 text-[12px] whitespace-nowrap",
              s === e ? "bg-ink font-semibold text-surface" : "shadow-card bg-surface text-ink-2",
            )}
          >
            {ty[s].name}
          </button>
        ))}
      </div>
      <div className="flex gap-4 px-1">
        {r.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => d(e)}
            className={eb("press relative pb-1 text-sm", e === x ? "font-bold text-ink" : "text-ink-3")}
          >
            {e}
            <span className="ml-0.5 text-[11px] tabular-nums">
              {"全部" === e ? n.length : n.filter((s) => s.status === e).length}
            </span>
            {e === x ? <span className="absolute inset-x-1 -bottom-0.5 h-1 rounded-full bg-brand" /> : null}
          </button>
        ))}
      </div>
      {m.map((t) => (
        <C_sc key={t.code} className="flex flex-col gap-3">
          <button type="button" onClick={() => s(a.detail)} className="press flex flex-col gap-3 text-left">
            <span className="flex w-full items-center justify-between">
              <span className="flex items-center gap-2 text-xs text-ink-3">
                <span className="rounded-md bg-brand-soft px-1.5 py-0.5 font-semibold text-brand-deep">{a.name}</span>
                <span className="tabular-nums">{t.code}</span>
              </span>
              <C_sh tone={tw[t.status]}>{t.status}</C_sh>
            </span>
            <span className="flex w-full items-end justify-between gap-3">
              <span className="flex min-w-0 flex-col gap-1">
                <span className="truncate text-[15px] font-bold text-ink">{t.title}</span>
                <span className="text-xs text-ink-2 tabular-nums">配送 / 使用：{t.use}</span>
                <span className="text-xs text-ink-3 tabular-nums">提交：{t.submit}</span>
              </span>
              <span className="flex shrink-0 flex-col items-end">
                {t.count ? <span className="text-[11px] text-ink-3">{t.count}</span> : null}
                {t.old ? <span className="text-[11px] text-ink-3 line-through">¥{t.old}</span> : null}
                <C_sP value={t.price} />
              </span>
            </span>
          </button>
          {"进行中" === t.status || "待支付" === t.status ? (
            <div className="flex justify-end gap-2 rounded-2xl bg-fill p-2">
              <C_sp size="sm" variant="outline" onClick={() => s("escort" === e ? "refund" : a.detail)}>
                取消订单
              </C_sp>
              {"待支付" === t.status ? (
                <C_sp size="sm" onClick={() => s("payment")}>
                  去支付
                </C_sp>
              ) : null}
            </div>
          ) : "已完成" === t.status ? (
            <div className="flex justify-end gap-2 rounded-2xl bg-fill p-2">
              <C_sp size="sm" variant="outline" onClick={() => s("addReview")}>
                评价
              </C_sp>
            </div>
          ) : null}
        </C_sc>
      ))}
    </C_si>
  );
}
function C_tC({ kind: e, code: s, status: t, title: l, sub: a, price: n }) {
  return (
    <div className="bg-hero-wash shadow-float flex flex-col gap-3 rounded-[24px] p-5 text-surface">
      <div className="flex items-center justify-between text-xs">
        <span className="opacity-90 tabular-nums">
          {e}
          {" #"}
          {s}
        </span>
        <span className="rounded-full bg-surface px-2.5 py-0.5 font-semibold text-brand-deep">{t}</span>
      </div>
      <div className="flex items-end justify-between gap-3">
        <span className="flex flex-col gap-1">
          <span className="text-lg font-bold">{l}</span>
          <span className="text-xs opacity-90 tabular-nums">{a}</span>
        </span>
        <span className="text-2xl font-bold tabular-nums">¥{n}</span>
      </div>
    </div>
  );
}
function C_tM({ img: e, video: s }) {
  return (
    <C_sc>
      <C_sd>附件资料</C_sd>
      <div className="flex gap-2.5">
        {[0, 1, 2].map((e) => (
          <span key={e} className="flex size-16 items-center justify-center rounded-2xl bg-brand-mist text-brand-deep">
            <C_tk className="size-5" />
          </span>
        ))}
        <span className="flex size-16 flex-col items-center justify-center gap-0.5 rounded-2xl bg-ink text-surface">
          <C_sn className="size-5" />
          <span className="text-[10px] tabular-nums">{s.split(" ")[0]}</span>
        </span>
      </div>
      <p className="mt-2 text-[11px] text-ink-3">
        图片（{e}） · 视频（{s}）
      </p>
    </C_sc>
  );
}
function C_tS({ pay: e }) {
  let { go: s, toast: t, back: l } = o();
  return (
    <>
      <C_sp
        variant="ghost"
        block={!e}
        onClick={() => {
          (t("订单已取消"), l());
        }}
      >
        取消订单
      </C_sp>
      {e ? (
        <C_sp block={!0} onClick={() => s("payment")}>
          订单支付
        </C_sp>
      ) : null}
    </>
  );
}
function C_tP({ value: e, onChange: s }) {
  return (
    <C_sc>
      <C_sd>支付方式</C_sd>
      <div className="flex flex-col gap-2">
        {[
          {
            n: "支付宝支付",
            bg: "bg-[#1677ff]",
            ch: "支",
          },
          {
            n: "微信支付",
            bg: "bg-success",
            ch: "微",
          },
        ].map((t) => (
          <button
            key={t.n}
            type="button"
            onClick={() => s(t.n)}
            className={eb(
              "press flex items-center gap-3 rounded-2xl p-3",
              e === t.n ? "bg-brand-soft ring-2 ring-brand" : "bg-fill",
            )}
          >
            <span
              className={eb("flex size-8 items-center justify-center rounded-xl text-sm font-bold text-surface", t.bg)}
            >
              {t.ch}
            </span>
            <span className="flex-1 text-left text-sm font-semibold text-ink">{t.n}</span>
            <span
              className={eb(
                "size-5 rounded-full",
                e === t.n ? "border-[6px] border-brand bg-surface" : "border-2 border-ink-3",
              )}
            />
          </button>
        ))}
      </div>
    </C_sc>
  );
}
let t_ = [
    {
      t: "09-04 14:30",
      c: "服务很贴心，准时又细致，老人很满意。",
    },
    {
      t: "09-03 19:08",
      c: "流程清楚，沟通顺畅，下次还会预约。",
    },
    {
      t: "08-29 10:15",
      c: "工作人员耐心专业，值得推荐。",
    },
    {
      t: "08-25 16:42",
      c: "饭菜清淡可口，配送准时。",
    },
    {
      t: "08-22 09:05",
      c: "孩子很喜欢老师，家长很放心。",
    },
  ],
  tD = {
    orders: () => <C_tz kind="meal" />,
    ordersTrust: () => <C_tz kind="trust" />,
    ordersEscort: () => <C_tz kind="escort" />,
    ordersHelper: () => <C_tz kind="helper" />,
    orderSearch: function () {
      let { back: e } = o(),
        [s, t] = (0, c.useState)("不限"),
        [l, a] = (0, c.useState)("全部");
      return (
        <C_si
          title="搜索订单"
          className="bg-sub-wash"
          bottom={
            <>
              <C_sp
                variant="ghost"
                onClick={() => {
                  (t("不限"), a("全部"));
                }}
              >
                重置
              </C_sp>
              <C_sp block={!0} onClick={e}>
                搜索
              </C_sp>
            </>
          }
        >
          <C_su placeholder="请输入订单编号" suffix={<C_eV className="size-4 text-ink-3" />} />
          <C_sc>
            <C_sd>下单日期</C_sd>
            <C_sb items={["不限", "今天", "近 7 天", "近 30 天", "自定义"]} value={s} onChange={t} />
          </C_sc>
          <C_sc>
            <C_sd>订单类型</C_sd>
            <C_sb items={["全部", "报餐单", "托管单", "陪诊单"]} value={l} onChange={a} />
          </C_sc>
          <C_sC>搜索与筛选对 4 类订单同时生效</C_sC>
        </C_si>
      );
    },
    orderMealDetail: function () {
      return (
        <C_si title="报餐单详情" className="bg-sub-wash" bottom={<C_tS />}>
          <C_tC
            kind="报餐单"
            code="BC20250904-001"
            status="进行中"
            title="午餐× 2"
            sub="配送 / 使用：09-05 · 提交：09-04 10:20"
            price="41.00"
          />
          <C_sc>
            <C_sd>菜单信息</C_sd>
            {[
              ["清蒸鲈鱼 · 时蔬 · 米饭", "18.00", "/images/meal-fish.png"],
              ["香菇滑鸡 · 西兰花 · 软米饭", "20.00", "/images/meal-chicken.png"],
            ].map(([e, s, t]) => (
              <div key={e} className="flex items-center gap-3 py-1.5">
                <span className="relative size-12 shrink-0 overflow-hidden rounded-xl">
                  <eW.Image src={t} alt={e} fill={!0} sizes="48px" className="object-cover" />
                </span>
                <span className="flex-1 text-sm text-ink">{e}</span>
                <span className="text-sm text-ink-2 tabular-nums">
                  ¥{s}
                  {" × 1"}
                </span>
              </div>
            ))}
            <div className="mt-2 rounded-2xl bg-fill px-3 py-1">
              <C_sm k="套餐小计" v="¥38.00" />
              <C_sm k="配送方式" v="物业配送" />
              <C_sm k="配送费" v="¥3.00" />
              <C_sm k="报餐日期" v="09-05" />
              <C_sm k="套餐规格" v="A套餐 · 12:00送达" />
              <C_sm k="联系电话" v="13800006688" />
            </div>
          </C_sc>
          <C_sc>
            <C_sd>支付信息</C_sd>
            <C_sm k="预估金额" v="¥41.00" accent={!0} />
            <C_sm k="支付状态" v={<C_sh tone="teal">已支付</C_sh>} />
            <C_sm k="支付方式" v="顾好家币" />
          </C_sc>
          <C_sc>
            <C_sd>订单日志</C_sd>
            <C_s_
              items={[
                {
                  title: "订单提交",
                  time: "09-04 10:20",
                  state: "done",
                },
              ]}
            />
          </C_sc>
          <C_tr />
        </C_si>
      );
    },
    orderTrustDetail: function () {
      return (
        <C_si title="托管单详情" className="bg-sub-wash" bottom={<C_tS />}>
          <C_tC
            kind="托管单"
            code="TG20250901-003"
            status="进行中"
            title="禄口一小课后托管 · 1 人"
            sub="提交：09-01 09:00"
            price="45.00"
          />
          <C_sc>
            <C_sd>托管信息</C_sd>
            <C_sm k="托管项目" v="禄口一小课后托管" />
            <C_sm k="托管人数" v="1 人" />
            <C_sm k="接 · 学校" v="禄口一小" />
            <C_sm k="接 · 时间" v="08:00" />
            <C_sm k="接送地址" v="阳光花园 3栋2单元1802" />
            <C_sm k="联系电话" v="13800006688" />
          </C_sc>
          <C_sc>
            <C_sd>支付信息</C_sd>
            <C_sm k="实付金额" v="¥45.00" accent={!0} />
            <C_sm k="支付状态" v={<C_sh tone="teal">已支付</C_sh>} />
            <C_sm k="支付方式" v="顾好家币" />
          </C_sc>
          <C_sz>
            <span>预估金额为单次最高金额，实际费用以服务结束后的结算金额为准。</span>
            <span>超时说明：如实际看护时长超出所选看护时段：</span>
            <span>· 选择 上午场，超时 1 小时后额外计费（含下午场）；</span>
            <span>· 选择 下午场，超时 1 小时后额外计费（含晚上场）；</span>
            <span>· 选择 晚上场，超时每小时 ¥100。</span>
          </C_sz>
          <C_sc>
            <C_sd>订单日志</C_sd>
            <C_s_
              items={[
                {
                  title: "订单提交",
                  time: "09-01 09:00",
                  state: "done",
                },
              ]}
            />
          </C_sc>
        </C_si>
      );
    },
    orderEscortDetail: function () {
      return (
        <C_si title="陪诊单详情" className="bg-sub-wash" bottom={<C_tS pay={!0} />}>
          <C_tC
            kind="陪诊单"
            code="PZ20250903-002"
            status="待支付"
            title="医院就诊全程陪诊 · 半天"
            sub="陪诊日期：09-05 09:00 · 提交：2026-09-03 16:00"
            price="240.00"
          />
          <C_sc>
            <C_sd>陪诊信息</C_sd>
            <C_sm k="服务名称" v="医院就诊全程陪诊" />
            <C_sm k="陪诊日期" v="09-05 09:00" />
            <C_sm k="服务时长" v="半天" />
            <C_sm k="陪诊地址" v="市第一人民医院" />
          </C_sc>
          <C_tM img="3 张 · 下单上传" video="00:18 · 下单上传" />
          <C_sc>
            <C_sd>附加费明细</C_sd>
            <p className="rounded-2xl bg-fill p-3 text-xs leading-relaxed text-ink-2">
              暂无需支付的附加费用，待陪诊服务完成后由陪诊员上传缴费凭证
            </p>
          </C_sc>
          <C_sc>
            <C_sd>支付信息</C_sd>
            <C_sm k="基础费用" v="¥240.00" />
            <C_sm k="附加费用" v="¥0.00" />
            <C_sm k="订单总额" v="¥240.00" accent={!0} />
            <C_sm k="支付状态" v={<C_sh tone="red">未支付</C_sh>} />
            <C_sm k="支付方式" v="/" />
          </C_sc>
          <C_sc>
            <C_sd>订单日志</C_sd>
            <C_s_
              items={[
                {
                  title: "订单提交",
                  time: "2026-09-03 16:00",
                  state: "done",
                },
              ]}
            />
          </C_sc>
        </C_si>
      );
    },
    orderHelperDetail: function () {
      let { toast: e } = o();
      return (
        <C_si title="生活帮手单详情" className="bg-sub-wash" bottom={<C_tS />}>
          <C_tC
            kind="生活帮手单"
            code="SH20250904-001"
            status="进行中"
            title="家政保洁 · 全屋深度清洁 · 1 次"
            sub="上门时间：09-05 09:00 · 提交：2026-09-04 15:30"
            price="180.00"
          />
          <C_sc>
            <C_sd>服务信息</C_sd>
            <C_sm k="服务标题" v="家政保洁 · 全屋深度清洁" />
            <C_sm k="服务数量" v="1 次" />
            <C_sm k="服务价格" v="¥180.00" />
            <C_sm k="上门时间" v="09-05 09:00" />
            <C_sm k="服务地址" v="阳光花园 3栋2单元-1802" />
            <C_sm k="联系电话" v="13800006688" />
          </C_sc>
          <C_sc className="flex items-center gap-3">
            <span className="bg-brand-gradient flex size-11 items-center justify-center rounded-full text-base font-bold text-surface">
              王
            </span>
            <span className="flex flex-1 flex-col">
              <span className="text-sm font-semibold text-ink">服务人员 · 王师傅</span>
              <span className="text-xs text-ink-2 tabular-nums">138 0000 1234</span>
            </span>
            <button
              type="button"
              aria-label="拨打电话"
              onClick={() => e("正在呼叫王师傅")}
              className="press flex size-10 items-center justify-center rounded-full bg-brand-soft text-brand-deep"
            >
              <C_sQ className="size-4" />
            </button>
          </C_sc>
          <C_tM img="3 张 · 上门前确认" video="00:26 · 上门前确认" />
          <C_sc>
            <C_sd>金额信息</C_sd>
            <C_sm k="预估金额" v="¥180.00" accent={!0} />
            <C_sm k="支付方式" v="线上不做订单支付，由线下收取" />
          </C_sc>
          <C_sc>
            <C_sd>订单日志</C_sd>
            <C_s_
              items={[
                {
                  title: "下单",
                  time: "2026-09-04 15:30",
                  state: "done",
                },
                {
                  title: "支付",
                  desc: "—（线下收取）",
                  state: "todo",
                },
              ]}
            />
          </C_sc>
        </C_si>
      );
    },
    orderSettlement: function () {
      let { go: e } = o(),
        [s, t] = (0, c.useState)("支付宝支付"),
        l = [
          {
            t: "报餐单总金额",
            d: "2 笔报餐单待结算",
            p: "54.00",
            icon: e_,
          },
          {
            t: "托管单总金额",
            d: "1 笔托管单待结算",
            p: "1,200.00",
            icon: C_eL,
          },
        ];
      return (
        <C_si
          title="订单结算"
          className="bg-sub-wash"
          bottom={
            <>
              <span className="flex flex-1 flex-col">
                <span className="text-[11px] text-ink-3">待结算合计</span>
                <C_sP value="1,254.00" />
              </span>
              <C_sp onClick={() => e("payment")}>立即结算</C_sp>
            </>
          }
        >
          <C_sc>
            <C_sd>待结算订单</C_sd>
            {l.map((e) => (
              <div key={e.t} className="flex items-center gap-3 py-2">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                  <e.icon className="size-5" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-ink">{e.t}</span>
                  <span className="text-xs text-ink-3">{e.d}</span>
                </span>
                <span className="text-base font-bold text-ink tabular-nums">¥{e.p}</span>
              </div>
            ))}
            <div className="mt-2 flex items-center justify-between rounded-2xl bg-brand-mist px-3 py-3">
              <span className="text-sm text-ink-2">待结算合计</span>
              <C_sP value="1,254.00" />
            </div>
          </C_sc>
          <C_tP value={s} onChange={t} />
        </C_si>
      );
    },
    review: function () {
      return (
        <C_si title="服务评价" className="bg-sub-wash">
          <C_sc className="flex items-center gap-4">
            <span className="text-4xl font-bold text-brand-deep tabular-nums">4.9</span>
            <span className="flex flex-col gap-1">
              <C_sM />
              <span className="text-xs text-ink-3">共 5 条评价 · 97% 好评</span>
            </span>
          </C_sc>
          {t_.map((e) => (
            <C_sc key={e.t} className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand-deep">
                  匿
                </span>
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">匿名</span>
                  <C_sM />
                </span>
                <span className="text-[11px] text-ink-3 tabular-nums">{e.t}</span>
              </div>
              <p className="text-[13px] leading-relaxed text-ink-2">{e.c}</p>
            </C_sc>
          ))}
        </C_si>
      );
    },
    addReview: function () {
      let { back: e, toast: s } = o(),
        [t, l] = (0, c.useState)(5);
      return (
        <C_si
          title="添加评价"
          className="bg-sub-wash"
          bottom={
            <C_sp
              block={!0}
              onClick={() => {
                (s("感谢你的评价"), e());
              }}
            >
              提交评价
            </C_sp>
          }
        >
          <C_sc className="flex items-center gap-3">
            <span className="relative size-12 overflow-hidden rounded-2xl">
              <eW.Image src="/images/meal-fish.png" alt="" fill={!0} sizes="48px" className="object-cover" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs text-ink-3">报餐单</span>
              <span className="text-[15px] font-bold text-ink">午餐 · 营养套餐</span>
            </span>
          </C_sc>
          <C_sc className="flex flex-col items-center gap-3 py-6">
            <span className="text-sm text-ink-2">为本次服务评分</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((e) => (
                <button key={e} type="button" aria-label={`${e} 星`} onClick={() => l(e)} className="press">
                  <svg
                    viewBox="0 0 24 24"
                    className={eb("size-9", e <= t ? "fill-brand" : "fill-tag-muted")}
                    aria-hidden="true"
                  >
                    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                  </svg>
                </button>
              ))}
            </div>
            <span className="text-base font-bold text-brand-deep">
              {["", "非常不满意", "不满意", "一般", "满意", "非常满意"][t]}
            </span>
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_su label="评价内容" placeholder="说说你的服务体验吧" textarea={!0} />
            <C_sk max={6} hint="可上传服务相关图片（最多 6 张）" />
          </C_sc>
        </C_si>
      );
    },
    refund: function () {
      let { replace: e } = o();
      return (
        <C_si
          title="退款申请"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("refundProgress")}>
              提交退款申请
            </C_sp>
          }
        >
          <C_sc className="flex items-center justify-between bg-warm-soft">
            <span className="flex flex-col gap-1">
              <span className="text-xs text-ink-2">当前退款状态</span>
              <span className="text-lg font-bold text-warm-ink">退款中</span>
              <span className="text-xs text-ink-2">申请已提交，等待物业后台审核</span>
            </span>
            <C_td className="size-10 text-warm-ink/60" />
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_sf label="退款原因" placeholder="请选择退款原因" required={!0} />
            <C_su label="退款说明（选填）" placeholder="请补充退款说明" textarea={!0} />
          </C_sc>
          <C_sz>
            <span>仅陪诊日期前可申请全额退款</span>
            <span>审核通过后原路退回，1-3 个工作日到账</span>
          </C_sz>
        </C_si>
      );
    },
    refundProgress: function () {
      let { back: e, toast: s } = o();
      return (
        <C_si
          title="退款进度"
          className="bg-sub-wash"
          bottom={
            <C_sp
              block={!0}
              variant="ghost"
              onClick={() => {
                (s("已撤销退款申请"), e());
              }}
            >
              撤销退款申请
            </C_sp>
          }
        >
          <div className="bg-hero-wash shadow-float flex flex-col gap-1 rounded-[24px] p-5 text-surface">
            <span className="text-xs opacity-90">当前退款状态 · 退款中</span>
            <span className="text-3xl font-bold tabular-nums">¥280.00</span>
            <span className="text-xs opacity-90">原路退回 · 预计 1-3 个工作日到账</span>
          </div>
          <C_sc>
            <C_sd>申请信息</C_sd>
            <C_sm k="订单编号" v="#PZ20250903-012" />
            <C_sm k="退款原因" v="陪诊时间冲突" />
            <C_sm k="申请时间" v="09-03 16:20" />
          </C_sc>
          <C_sc>
            <C_sd>处理进度</C_sd>
            <C_s_
              items={[
                {
                  title: "退款申请已提交",
                  time: "09-03 16:20",
                  state: "done",
                },
                {
                  title: "物业后台审核中",
                  desc: "等待物业审核，通常 1 个工作日内完成",
                  state: "doing",
                },
                {
                  title: "原路退回至支付账户",
                  desc: "审核通过后 1-3 个工作日到账",
                  state: "todo",
                },
              ]}
            />
          </C_sc>
          <C_sC>仅陪诊日期前可申请全额退款 · 审核通过后原路退回，到账时间 1-3 个工作日</C_sC>
        </C_si>
      );
    },
    payment: function () {
      let { replace: e } = o(),
        [s, t] = (0, c.useState)("支付宝支付");
      return (
        <C_si
          title="收银台"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("payResult")}>
              确认支付 ¥54.00
            </C_sp>
          }
        >
          <C_sc className="flex flex-col items-center gap-1 py-8">
            <span className="text-sm text-ink-2">待支付金额</span>
            <C_sP value="54.00" size="lg" />
            <span className="mt-1 flex items-center gap-1 text-xs text-ink-3">
              <C_td className="size-3.5" />
              请在 15:00 内完成支付
            </span>
          </C_sc>
          <C_tP value={s} onChange={t} />
        </C_si>
      );
    },
    payResult: function () {
      let { reset: e } = o();
      return (
        <C_si className="bg-sub-wash gap-5" nav={<C_sr noBack={!0} />}>
          <div className="flex flex-col items-center gap-3 pt-6 text-center">
            <span className="bg-brand-gradient shadow-float flex size-20 items-center justify-center rounded-full text-surface">
              <svg
                viewBox="0 0 24 24"
                className="size-10"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                aria-hidden="true"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-xl font-bold text-ink">支付成功</p>
            <p className="text-sm text-ink-2 tabular-nums">¥54.00 · 支付宝支付</p>
          </div>
          <C_sc>
            <C_sm k="支付方式" v="支付宝" />
            <C_sm k="支付时间" v="09-05 09:50" />
            <C_sm k="交易单号" v="20260905095000123456" />
          </C_sc>
          <div className="flex gap-3">
            <C_sp block={!0} variant="outline" onClick={() => e("orders")}>
              查看订单
            </C_sp>
            <C_sp block={!0} onClick={() => e("home")}>
              返回首页
            </C_sp>
          </div>
        </C_si>
      );
    },
  };
var eW = eW;
let C_tR = ew("badge-check", [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
        key: "3c2336",
      },
    ],
    [
      "path",
      {
        d: "m9 12 2 2 4-4",
        key: "dzmm74",
      },
    ],
  ]),
  tL = ew("calendar-check", [
    [
      "path",
      {
        d: "M8 2v4",
        key: "1cmpym",
      },
    ],
    [
      "path",
      {
        d: "M16 2v4",
        key: "4m81vk",
      },
    ],
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy",
      },
    ],
    [
      "path",
      {
        d: "M3 10h18",
        key: "8toen8",
      },
    ],
    [
      "path",
      {
        d: "m9 16 2 2 4-4",
        key: "19s6y9",
      },
    ],
  ]),
  C_tI = ew("chevron-down", [
    [
      "path",
      {
        d: "m6 9 6 6 6-6",
        key: "qrunsl",
      },
    ],
  ]),
  C_tO = ew("coins", [
    [
      "path",
      {
        d: "M13.744 17.736a6 6 0 1 1-7.48-7.48",
        key: "bq4yh3",
      },
    ],
    [
      "path",
      {
        d: "M15 6h1v4",
        key: "11y1tn",
      },
    ],
    [
      "path",
      {
        d: "m6.134 14.768.866-.5 2 3.464",
        key: "17snzx",
      },
    ],
    [
      "circle",
      {
        cx: "16",
        cy: "8",
        r: "6",
        key: "14bfc9",
      },
    ],
  ]),
  tA = ew("headset", [
    [
      "path",
      {
        d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
        key: "12oyoe",
      },
    ],
    [
      "path",
      {
        d: "M21 16v2a4 4 0 0 1-4 4h-5",
        key: "1x7m43",
      },
    ],
  ]),
  C_tW = ew("log-out", [
    [
      "path",
      {
        d: "m16 17 5-5-5-5",
        key: "1bji2h",
      },
    ],
    [
      "path",
      {
        d: "M21 12H9",
        key: "dn1m92",
      },
    ],
    [
      "path",
      {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs",
      },
    ],
  ]),
  C_tH = ew("qr-code", [
    [
      "rect",
      {
        width: "5",
        height: "5",
        x: "3",
        y: "3",
        rx: "1",
        key: "1tu5fj",
      },
    ],
    [
      "rect",
      {
        width: "5",
        height: "5",
        x: "16",
        y: "3",
        rx: "1",
        key: "1v8r4q",
      },
    ],
    [
      "rect",
      {
        width: "5",
        height: "5",
        x: "3",
        y: "16",
        rx: "1",
        key: "1x03jg",
      },
    ],
    [
      "path",
      {
        d: "M21 16h-3a2 2 0 0 0-2 2v3",
        key: "177gqh",
      },
    ],
    [
      "path",
      {
        d: "M21 21v.01",
        key: "ents32",
      },
    ],
    [
      "path",
      {
        d: "M12 7v3a2 2 0 0 1-2 2H7",
        key: "8crl2c",
      },
    ],
    [
      "path",
      {
        d: "M3 12h.01",
        key: "nlz23k",
      },
    ],
    [
      "path",
      {
        d: "M12 3h.01",
        key: "n36tog",
      },
    ],
    [
      "path",
      {
        d: "M12 16v.01",
        key: "133mhm",
      },
    ],
    [
      "path",
      {
        d: "M16 12h1",
        key: "1slzba",
      },
    ],
    [
      "path",
      {
        d: "M21 12v.01",
        key: "1lwtk9",
      },
    ],
    [
      "path",
      {
        d: "M12 21v-1",
        key: "1880an",
      },
    ],
  ]),
  C_tq = ew("receipt-text", [
    [
      "path",
      {
        d: "M13 16H8",
        key: "wsln4y",
      },
    ],
    [
      "path",
      {
        d: "M14 8H8",
        key: "1l3xfs",
      },
    ],
    [
      "path",
      {
        d: "M16 12H8",
        key: "1fr5h0",
      },
    ],
    [
      "path",
      {
        d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
        key: "ycz6yz",
      },
    ],
  ]),
  C_t$ = ew("settings", [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd",
      },
    ],
  ]),
  C_tF = ew("trash-2", [
    [
      "path",
      {
        d: "M10 11v6",
        key: "nco0om",
      },
    ],
    [
      "path",
      {
        d: "M14 11v6",
        key: "outv1u",
      },
    ],
    [
      "path",
      {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
        key: "miytrc",
      },
    ],
    [
      "path",
      {
        d: "M3 6h18",
        key: "d0wm0j",
      },
    ],
    [
      "path",
      {
        d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
        key: "e791ji",
      },
    ],
  ]),
  C_tE = ew("user-plus", [
    [
      "path",
      {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq",
      },
    ],
    [
      "circle",
      {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8",
      },
    ],
    [
      "line",
      {
        x1: "19",
        x2: "19",
        y1: "8",
        y2: "14",
        key: "1bvyxn",
      },
    ],
    [
      "line",
      {
        x1: "22",
        x2: "16",
        y1: "11",
        y2: "11",
        key: "1shjgl",
      },
    ],
  ]),
  C_tB = ew("wrench", [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
        key: "1ngwbx",
      },
    ],
  ]);
function C_tV({ title: e, items: s }) {
  let { go: t } = o();
  return (
    <C_sc className="flex flex-col gap-3">
      <h2 className="text-[15px] font-bold text-ink">{e}</h2>
      <div className="grid grid-cols-4 gap-y-3">
        {s.map((e) => (
          <button key={e.t} type="button" onClick={() => t(e.to)} className="press flex flex-col items-center gap-1.5">
            <span
              className={eb(
                "flex size-11 items-center justify-center rounded-2xl",
                e.tint ?? "bg-brand-soft text-brand-deep",
              )}
            >
              <e.icon className="size-5" />
            </span>
            <span className="text-xs whitespace-nowrap text-ink">{e.t}</span>
          </button>
        ))}
      </div>
    </C_sc>
  );
}
let tT = [
    {
      n: "爸爸",
      role: "家庭成员",
    },
    {
      n: "妈妈",
      role: "家庭成员",
    },
    {
      n: "小明",
      role: "家庭成员",
    },
    {
      n: "租客小王",
      role: "租户",
      note: "已授权托管/报餐",
    },
  ],
  tG = [
    {
      t: "结算返还",
      d: "2026-09-01 10:00",
      v: "+¥126.00",
      type: "结算返还",
    },
    {
      t: "托管单支出",
      d: "2026-09-01 09:00",
      v: "-¥45.00",
      type: "支出",
    },
    {
      t: "报餐单支出",
      d: "2026-08-31 17:30",
      v: "-¥36.00",
      type: "支出",
    },
    {
      t: "余额充值",
      d: "2026-08-28 14:20",
      v: "+¥500.00",
      type: "收入",
    },
    {
      t: "托管单支出",
      d: "2026-07-01 15:20",
      v: "-¥980.00",
      type: "支出",
    },
    {
      t: "报餐单支出",
      d: "2026-06-30 11:05",
      v: "-¥18.00",
      type: "支出",
    },
  ];
function C_tU({ title: e, count: s, rows: t }) {
  let [l, a] = (0, c.useState)(!1);
  return (
    <C_sc className="flex flex-col gap-2">
      <button type="button" onClick={() => a(!l)} className="press flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">
          {e}
          {" · 共 "}
          {s}
          {" 笔"}
        </span>
        <span className="flex items-center gap-0.5 text-xs text-brand-deep">
          {l ? "收起" : "展开"}
          <C_tI className={eb("size-3.5 transition-transform", l && "rotate-180")} />
        </span>
      </button>
      {l
        ? t.map(([e, s, t]) => (
            <div key={e} className="flex items-center justify-between rounded-2xl bg-fill px-3 py-2.5">
              <span className="flex flex-col gap-0.5">
                <span className="text-[13px] text-ink">{e}</span>
                <span className="text-[11px] text-ink-3">{s}</span>
              </span>
              <span className="text-sm font-semibold text-ink tabular-nums">{t}</span>
            </div>
          ))
        : null}
    </C_sc>
  );
}
let tZ = [
    ["全天托管 · 8月29日", "08-29 09:00", "顾家小林 · 业主", "¥90.00", "¥0.00"],
    ["课后托管 · 8月28日", "08-28 16:30", "顾小妹 · 家庭成员", "¥45.00", "¥0.00"],
    ["全天托管 · 8月22日", "08-22 09:00", "顾家小林 · 业主", "¥90.00", "¥0.00"],
    ["课后托管 · 8月21日", "08-21 16:30", "租客小王 · 租户", "¥45.00", "¥0.00"],
    ["课后托管 · 8月20日", "08-20 16:30 · 当日取消 · 全额退款", "顾小妹 · 家庭成员", "¥45.00", "-¥45.00"],
    ["全天托管 · 8月15日", "08-15 09:00", "顾家小林 · 业主", "¥90.00", "¥0.00"],
    ["课后托管 · 8月14日", "08-14 16:30", "租客小王 · 租户", "¥45.00", "¥0.00"],
  ],
  tJ = [
    ["陪诊单下单结果", "09-29 10:20", !0],
    ["报餐单取消订单", "09-28 12:30", !0],
    ["托管单取消订单", "09-27 16:40", !0],
    ["陪诊单售后结果", "09-25 15:00", !1],
    ["报餐单下单结果", "09-24 09:15", !1],
    ["托管单下单结果", "09-22 08:50", !1],
  ],
  tBillMsgs = [
    {
      title: "9月账单待结算提醒",
      time: "09-30 09:00",
      unread: !0,
      heading: "您的9月账单已生成，待结算 ¥450.00",
      body: [
        "本房号9月共产生托管单 4 笔（¥315.00）、报餐单 7 笔（¥135.00），合计待结算 ¥450.00。",
        "请于 10 月 5 日前完成结算，逾期将暂停新订单的提交。",
      ],
      amount: "¥450.00",
      tone: "warn",
      route: "bill",
    },
    {
      title: "8月托管账单已结清",
      time: "09-02 14:30",
      unread: !1,
      heading: "8月托管账单已结清 ¥405.00",
      body: [
        "您的8月托管账单（共 7 笔）已于 2026-09-02 完成结算，金额 ¥405.00。",
        "可在「我的账单 - 已结算」中查看账单明细。",
      ],
      amount: "¥405.00",
      tone: "teal",
      route: "billDetail",
    },
    {
      title: "8月报餐账单已结清",
      time: "09-02 14:28",
      unread: !1,
      heading: "8月报餐账单已结清 ¥186.00",
      body: [
        "您的8月报餐账单（共 11 笔）已于 2026-09-02 完成结算，金额 ¥186.00。",
        "可在「我的账单 - 已结算」中查看账单明细。",
      ],
      amount: "¥186.00",
      tone: "teal",
      route: "billDetail",
    },
  ];
let sysMsgCurrent = null;
function C_tQ({ title: e, head: s, items: t }) {
  return (
    <C_si title={e} className="bg-sub-wash">
      <C_sc className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold text-ink">{s}</h2>
          <span className="text-xs text-ink-3">更新日期：2026-08-01 · 生效日期��2026-08-01</span>
        </div>
        {t.map(([e, s]) => (
          <div key={e} className="flex flex-col gap-1">
            <h3 className="text-sm font-bold text-ink">{e}</h3>
            <p className="text-[13px] leading-relaxed text-ink-2">{s}</p>
          </div>
        ))}
      </C_sc>
    </C_si>
  );
}
let tX = {
    profile: function () {
      let { go: e } = o();
      return (
        <C_si tab={!0} className="bg-header-wash gap-4">
          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              type="button"
              aria-label="系统设置"
              onClick={() => e("settings")}
              className="press shadow-card flex size-10 items-center justify-center rounded-full bg-surface"
            >
              <C_t$ className="size-5 text-ink" strokeWidth={1.8} />
            </button>
            <C_th />
          </div>
          <button
            type="button"
            onClick={() => e("personInfo")}
            className="press flex items-center gap-3 px-1 text-left"
          >
            <span className="rounded-full ring-4 ring-surface">
              <C_sS name="顾" size={64} />
            </span>
            <span className="flex flex-1 flex-col gap-1">
              <span className="text-xl font-bold text-ink">顾家小林</span>
              <span className="flex items-center gap-1 text-xs text-ink-2">
                阳光花园 3栋2单元-1802
                <C_sh tone="teal">
                  <C_tR className="mr-0.5 size-3" />
                  已认证
                </C_sh>
              </span>
            </span>
            <C_e$ className="size-5 text-ink-3" />
          </button>
          <C_sc onClick={() => e("bill")} className="bg-hero-wash grid grid-cols-2 text-surface">
            <span className="flex flex-col gap-0.5 border-r border-surface/30">
              <span className="text-xl font-bold tabular-nums">¥1,254.00</span>
              <span className="text-xs opacity-90">待结算</span>
            </span>
            <span className="flex flex-col gap-0.5 pl-4">
              <span className="text-xl font-bold tabular-nums">¥1,686.00</span>
              <span className="text-xs opacity-90">已结算</span>
            </span>
          </C_sc>
          <C_tV
            title="我的服务"
            items={[
              {
                t: "顾好家币",
                icon: C_tO,
                to: "coin",
              },
              {
                t: "我的账单",
                icon: C_tq,
                to: "bill",
              },
              {
                t: "我的报名",
                icon: tL,
                to: "mySignup",
              },
              {
                t: "生活帮手",
                icon: C_tB,
                to: "myHelper",
              },
            ]}
          />
          <C_tV
            title="家庭与设备"
            items={[
              {
                t: "我的家庭",
                icon: C_eL,
                to: "family",
                tint: "bg-warm-soft text-warm-ink",
              },
              {
                t: "我的管家",
                icon: tA,
                to: "butler",
                tint: "bg-warm-soft text-warm-ink",
              },
              {
                t: "我的手环",
                icon: C_s2,
                to: "myBand",
                tint: "bg-warm-soft text-warm-ink",
              },
            ]}
          />
          <C_tV
            title="社区权益"
            items={[
              {
                t: "小区钱袋子",
                icon: C_tp,
                to: "moneyBag",
                tint: "bg-success-soft text-success",
              },
              {
                t: "人力资源",
                icon: C_tx,
                to: "hr",
                tint: "bg-success-soft text-success",
              },
              {
                t: "业主认证",
                icon: C_s0,
                to: "certList",
                tint: "bg-success-soft text-success",
              },
              {
                t: "物业后台",
                icon: C_e0,
                to: "propBackend",
                tint: "bg-success-soft text-success",
              },
            ]}
          />
        </C_si>
      );
    },
    personInfo: function () {
      let { go: e } = o();
      return (
        <C_si className="bg-sub-wash" nav={<C_sr title="个人信息" right="编辑" onRight={() => e("editProfile")} />}>
          <C_sc className="flex flex-col py-1">
            <C_so label="头像" value={<C_sS name="顾" size={36} />} />
            <C_so label="昵称" value="顾家小林" />
            <C_so label="手机号码" value="138****6688" />
            <C_so label="认证状态" value={<C_sh tone="teal">已认证</C_sh>} onClick={() => e("certList")} />
          </C_sc>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>协议与条款</C_sd>
            </div>
            <C_so label="用户协议" onClick={() => e("agreement")} />
            <C_so label="隐私政策" onClick={() => e("privacy")} />
          </C_sc>
        </C_si>
      );
    },
    editProfile: function () {
      let { go: e, back: s, toast: t } = o();
      return (
        <C_si
          className="bg-sub-wash"
          nav={
            <C_sr
              title="编辑个人信息"
              right="保存"
              onRight={() => {
                (t("已保存"), s());
              }}
            />
          }
        >
          <C_sc className="flex flex-col items-center gap-2 py-6">
            <button type="button" className="press relative">
              <C_sS name="顾" size={80} />
              <span className="absolute right-0 bottom-0 flex size-7 items-center justify-center rounded-full bg-ink text-surface ring-2 ring-surface">
                <C_e1 className="size-3.5" />
              </span>
            </button>
            <span className="text-xs text-ink-3">点击更换头像</span>
          </C_sc>
          <C_sc className="flex flex-col gap-4">
            <C_sd>基础资料</C_sd>
            <C_su label="昵称" defaultValue="顾家小林" />
            <C_so label="手机号码" value="138****6688" onClick={() => e("changePhone")} />
          </C_sc>
        </C_si>
      );
    },
    changePhone: function () {
      let { back: e, toast: s } = o();
      return (
        <C_si title="换绑手机号" className="bg-sub-wash gap-4">
          <C_sc className="flex flex-col items-center gap-1 py-5">
            <span className="text-xs text-ink-3">当前号码</span>
            <span className="text-2xl font-bold text-ink tabular-nums">138****6688</span>
          </C_sc>
          <C_sc className="flex flex-col gap-3">
            <C_su label="新手机号码" placeholder="请输入新号码" type="tel" />
            <C_sR />
          </C_sc>
          <C_sp
            block={!0}
            onClick={() => {
              (s("换绑成功"), e());
            }}
          >
            确认换绑
          </C_sp>
        </C_si>
      );
    },
    coin: function () {
      let { go: e } = o();
      return (
        <C_si title="房号共享额度" className="bg-sub-wash">
          <div className="bg-hero-wash shadow-float flex flex-col gap-4 rounded-[24px] p-5 text-surface">
            <span className="text-xs opacity-90">房号共享额度 · 阳光花园 3栋2单元-1802</span>
            <span className="text-4xl font-bold tabular-nums">¥ 868.00</span>
            <div className="h-2 overflow-hidden rounded-full bg-surface/30">
              <span className="block h-full w-[13.2%] rounded-full bg-surface" />
            </div>
            <div className="grid grid-cols-3 text-center text-xs">
              {[
                ["总额度", "¥1000.00"],
                ["已使用", "¥132.00"],
                ["剩余", "¥868.00"],
              ].map(([e, s]) => (
                <span key={e} className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold tabular-nums">{s}</span>
                  <span className="opacity-90">{e}</span>
                </span>
              ))}
            </div>
          </div>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd extra={<span className="text-xs text-ink-3">4 人</span>}>共用该额度的成员</C_sd>
            </div>
            {tT.map((e) => (
              <C_so
                key={e.n}
                icon={<span className="text-sm font-bold">{e.n.slice(0, 1)}</span>}
                label={e.n}
                desc={e.note ?? e.role}
                strong={!0}
                value={<C_sh tone={"租户" === e.role ? "warm" : "brand"}>{e.role}</C_sh>}
              />
            ))}
          </C_sc>
          <div className="flex gap-3">
            <C_sp block={!0} variant="outline" onClick={() => e("coinDetail")}>
              账户明细
            </C_sp>
            <C_sp block={!0} onClick={() => e("coinRecharge")}>
              账户充值
            </C_sp>
          </div>
        </C_si>
      );
    },
    coinRecharge: function () {
      let { back: e, toast: s } = o(),
        [t, l] = (0, c.useState)("¥300"),
        [a, n] = (0, c.useState)("微信支付");
      return (
        <C_si
          title="账户充值"
          className="bg-sub-wash"
          bottom={
            <C_sp
              block={!0}
              onClick={() => {
                (s("充值成功"), e());
              }}
            >
              {"确认充值 "}
              {t}
            </C_sp>
          }
        >
          <C_sc className="flex flex-col gap-4">
            <C_sd>充值金额</C_sd>
            <div className="grid grid-cols-2 gap-2.5">
              {["¥100", "¥300", "¥500", "¥1000"].map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => l(e)}
                  className={eb(
                    "press rounded-2xl py-4 text-lg font-bold tabular-nums",
                    e === t ? "bg-brand-soft text-brand-ink ring-2 ring-brand" : "bg-fill text-ink",
                  )}
                >
                  {e}
                </button>
              ))}
            </div>
            <C_su label="金额" placeholder="自定义充值金额" type="number" />
          </C_sc>
          <C_tP value={a} onChange={n} />
        </C_si>
      );
    },
    coinDetail: function () {
      let [e, s] = (0, c.useState)("全部"),
        t = tG.filter((s) => "全部" === e || s.type === e);
      return (
        <C_si title="账户明细" className="bg-sub-wash">
          <C_sj items={["全部", "收入", "支出", "结算返还"]} value={e} onChange={s} />
          <C_sc className="flex flex-col py-1">
            {t.map((e) => (
              <div key={e.d} className="flex items-center gap-3 border-t border-hairline py-3 first:border-t-0">
                <span
                  className={eb(
                    "flex size-10 items-center justify-center rounded-2xl",
                    e.v.startsWith("+") ? "bg-success-soft text-success" : "bg-brand-soft text-brand-deep",
                  )}
                >
                  <C_tO className="size-5" />
                </span>
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">{e.t}</span>
                  <span className="text-xs text-ink-3 tabular-nums">{e.d}</span>
                </span>
                <span
                  className={eb("text-base font-bold tabular-nums", e.v.startsWith("+") ? "text-success" : "text-ink")}
                >
                  {e.v}
                </span>
              </div>
            ))}
          </C_sc>
        </C_si>
      );
    },
    bill: function () {
      let { go: e } = o(),
        [s, t] = (0, c.useState)("待结算");
      return (
        <C_si
          title="我的账单"
          className="bg-sub-wash"
          bottom={
            "待结算" === s ? (
              <C_sp block={!0} onClick={() => e("payment")}>
                立即付款 ¥450.00
              </C_sp>
            ) : (
              void 0
            )
          }
        >
          <div className="bg-hero-wash shadow-float flex flex-col gap-3 rounded-[24px] p-5 text-surface">
            <span className="text-xs opacity-90">本房号账单整合（业主 + 家人 + 租户）</span>
            <div className="flex items-end justify-between">
              <span className="flex flex-col">
                <span className="text-xs opacity-90">待结算合计</span>
                <span className="text-3xl font-bold tabular-nums">¥450.00</span>
              </span>
              <span className="rounded-full bg-surface/25 px-2.5 py-1 text-[11px]">共享额度剩余 ¥868</span>
            </div>
            <div className="grid grid-cols-2 rounded-2xl bg-surface/20 py-2.5 text-center">
              <span className="flex flex-col">
                <span className="text-[11px] opacity-90">托管</span>
                <span className="font-bold tabular-nums">¥315.00</span>
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] opacity-90">报餐</span>
                <span className="font-bold tabular-nums">¥135.00</span>
              </span>
            </div>
          </div>
          <C_sj items={["待结算", "已结算"]} value={s} onChange={t} />
          {"待结算" === s ? (
            <>
              <C_tU
                title="托管单明细"
                count={4}
                rows={[
                  ["全天托管 · 9月5日", "顾家小林 · 业主", "¥90.00"],
                  ["课后托管 · 9月4日", "顾小妹 · 家庭成员", "¥45.00"],
                  ["全天托管 · 9月3日", "租客小王 · 租户", "¥90.00"],
                  ["全天托管 · 9月2日", "顾家小林 · 业主", "¥90.00"],
                ]}
              />
              <C_tU
                title="报餐单明细"
                count={7}
                rows={[
                  ["午餐 · 9月5日", "顾家小林 · 业主", "¥18.00"],
                  ["晚餐 · 9月4日", "妈妈 · 家庭成员", "¥16.00"],
                  ["午餐 · 9月4日", "租客小王 · 租户", "¥22.00"],
                ]}
              />
            </>
          ) : (
            ["8月托管账单", "8月报餐账单", "7月托管账单"].map((s) => (
              <C_sc key={s} onClick={() => e("billDetail")} className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-success-soft text-success">
                  <C_tq className="size-5" />
                </span>
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">{s}</span>
                  <span className="text-xs text-ink-3">结算时间 2026-08-01 · 共 7 笔</span>
                </span>
                <span className="flex flex-col items-end gap-0.5">
                  <span className="text-base font-bold text-ink tabular-nums">¥405.00</span>
                  <C_sh tone="teal">已结清</C_sh>
                </span>
              </C_sc>
            ))
          )}
        </C_si>
      );
    },
    billDetail: function () {
      let [e, s] = (0, c.useState)("托管");
      return (
        <C_si title="账单详情" className="bg-sub-wash">
          <C_sj items={["托管", "报餐"]} value={e} onChange={s} />
          <C_sc className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-ink">8月{e}账单</span>
              <C_sh tone="teal">已结清</C_sh>
            </div>
            <span className="text-xs text-ink-3">结算时间 2026-08-01 · 共 7 笔</span>
            <div className="mt-1 grid grid-cols-3 gap-2 text-center">
              {[
                ["付款", "¥450.00"],
                ["退款", "-¥45.00"],
                ["已结合计", "¥405.00"],
              ].map(([e, s], t) => (
                <span
                  key={e}
                  className={eb("flex flex-col gap-0.5 rounded-2xl py-2.5", 2 === t ? "bg-brand-soft" : "bg-fill")}
                >
                  <span className="text-[11px] text-ink-3">{e}</span>
                  <span className={eb("text-sm font-bold tabular-nums", 2 === t ? "text-brand-ink" : "text-ink")}>
                    {s}
                  </span>
                </span>
              ))}
            </div>
          </C_sc>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>结算明细</C_sd>
            </div>
            {tZ.map(([e, s, t, l, a]) => (
              <div key={e} className="flex items-start gap-3 border-t border-hairline py-3 first:border-t-0">
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">{e}</span>
                  <span className="text-[11px] text-ink-3">{s}</span>
                  <span className="text-[11px] text-ink-2">{t}</span>
                </span>
                <span className="flex flex-col items-end gap-0.5">
                  <span className="text-sm font-bold text-ink tabular-nums">{l}</span>
                  <span className={eb("text-[11px] tabular-nums", a.startsWith("-") ? "text-danger" : "text-ink-3")}>
                    {"退款 "}
                    {a}
                  </span>
                </span>
              </div>
            ))}
          </C_sc>
        </C_si>
      );
    },
    propBackend: function () {
      let { go: e } = o();
      return (
        <C_si title="物业后台" className="bg-sub-wash">
          <C_sz>
            物业后台 ·
            按房号配置顾好家币额度。额度为房号级共享额度，同房号下业主、家人、租户账号共用，所有账单整合后从额度中扣减。
          </C_sz>
          <h2 className="px-1 text-[15px] font-bold text-ink">房号额度配置</h2>
          {[
            ["阳光花园 3栋2单元-1802", "¥1000.00", "¥132.00", "¥868", 13],
            ["玫瑰新城 5栋1单元-0903", "¥600.00", "¥0.00", "¥600", 0],
          ].map(([s, t, l, a, n]) => (
            <C_sc key={s} onClick={() => e("propRoomQuota")} className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-bold text-ink">{s}</span>
                <span className="text-base font-bold text-brand-deep tabular-nums">
                  {"剩 "}
                  {a}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-fill">
                <span
                  className="bg-brand-gradient block h-full rounded-full"
                  style={{
                    width: `${Math.max(n, 2)}%`,
                  }}
                />
              </div>
              <span className="text-xs text-ink-3 tabular-nums">
                {"总额度 "}
                {t}
                {" · 已用 "}
                {l}
              </span>
            </C_sc>
          ))}
        </C_si>
      );
    },
    propRoomQuota: function () {
      let { back: e, toast: s } = o();
      return (
        <C_si
          title="房号额度"
          className="bg-sub-wash"
          bottom={
            <C_sp
              block={!0}
              onClick={() => {
                (s("额度已保存"), e());
              }}
            >
              保存额度
            </C_sp>
          }
        >
          <C_sc className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-ink">房号 · 阳光花园 3栋2单元-1802</span>
            <C_su label="顾好家币额度（元）" defaultValue="1000" type="number" />
            <div className="rounded-2xl bg-fill px-3 py-1">
              <C_sm k="已使用额度" v="¥132.00" />
              <C_sm k="调整后剩余" v="¥868.00" accent={!0} />
            </div>
          </C_sc>
          <C_sz>降低额度时不可低于已使用额度（¥132.00）。保存后，该房号下所有业主、家人、租户账号将共用新额度。</C_sz>
        </C_si>
      );
    },
    family: function () {
      let { go: e } = o();
      return (
        <C_si title="我的家庭" className="bg-sub-wash">
          {[
            ["阳光花园 3栋2单元-1802", "家庭成员 3 · 租户 1"],
            ["玫瑰新城 5栋1单元-0903", "家庭成员 1 · 租户 0"],
          ].map(([s, t]) => (
            <C_sc key={s} onClick={() => e("familyMembers")} className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-warm-soft text-warm-ink">
                <C_e0 className="size-6" />
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="text-[15px] font-bold text-ink">{s}</span>
                <span className="text-xs text-ink-2">{t}</span>
              </span>
              <C_e$ className="size-4 text-ink-3" />
            </C_sc>
          ))}
        </C_si>
      );
    },
    familyMembers: function () {
      let { go: e } = o();
      return (
        <C_si title="成员列表" className="bg-sub-wash">
          {[
            {
              g: "家庭成员 · 3",
              list: [
                ["爸爸", "09-01 加入"],
                ["妈妈", "09-01 加入"],
                ["小明", "09-02 加入"],
              ],
              role: "家庭成员",
            },
            {
              g: "租户 · 1",
              list: [["租客小王", "09-10 加入 · 已授权"]],
              role: "租户",
            },
          ].map((s) => (
            <C_sc key={s.g} className="flex flex-col py-1">
              <div className="pt-3">
                <C_sd>{s.g}</C_sd>
              </div>
              {s.list.map(([t, l]) => (
                <C_so
                  key={t}
                  icon={<span className="text-sm font-bold">{t.slice(0, 1)}</span>}
                  label={t}
                  desc={l}
                  strong={!0}
                  value={<C_sh tone={"租户" === s.role ? "warm" : "brand"}>{s.role}</C_sh>}
                  onClick={() => e("memberRole")}
                />
              ))}
            </C_sc>
          ))}
          <C_sc onClick={() => e("invitePoster")} className="flex items-center gap-3 bg-brand-mist">
            <span className="bg-brand-gradient flex size-11 items-center justify-center rounded-2xl text-surface">
              <C_tE className="size-5" />
            </span>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-[15px] font-bold text-ink">邀请加入本房号</span>
              <span className="text-xs text-ink-2">生成海报，扫码邀请他人加入本房号</span>
            </span>
            <C_e$ className="size-4 text-ink-3" />
          </C_sc>
        </C_si>
      );
    },
    memberRole: function () {
      let { reset: e, back: s, toast: t } = o(),
        [l, a] = (0, c.useState)("家庭成员"),
        [n, r] = (0, c.useState)(!1);
      return (
        <C_si title="成员设置" className="bg-sub-wash">
          <C_sc className="flex items-center gap-3">
            <C_sS name="爸" size={52} tone="warm" />
            <span className="flex flex-col gap-0.5">
              <span className="text-lg font-bold text-ink">爸爸</span>
              <span className="text-xs text-ink-2">
                {"阳光花园 3栋2单元-1802 · "}
                {l}
              </span>
            </span>
          </C_sc>
          <C_sc>
            <C_sd>成员角色</C_sd>
            <C_sb items={["家庭成员", "租户"]} value={l} onChange={a} />
          </C_sc>
          <C_sc
            onClick={() => {
              (t("已切换演示身份"), e("home"));
            }}
            className="flex items-center gap-3"
          >
            <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <C_eL className="size-5" />
            </span>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm font-semibold text-ink">以此身份体验</span>
              <span className="text-xs text-ink-3">切换当前演示身份</span>
            </span>
            <C_e$ className="size-4 text-ink-3" />
          </C_sc>
          <C_sp block={!0} variant="danger" onClick={() => r(!0)}>
            解除绑定
          </C_sp>
          {n ? (
            <C_sL onClose={() => r(!1)}>
              <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-lg font-bold text-ink">解除绑定</p>
                <p className="text-sm leading-relaxed text-ink-2">
                  解除后该成员将无法使用本房号的服务与额度，确定解除吗？
                </p>
                <div className="flex w-full gap-3 pt-2">
                  <C_sp block={!0} variant="ghost" onClick={() => r(!1)}>
                    取消
                  </C_sp>
                  <C_sp
                    block={!0}
                    variant="danger"
                    onClick={() => {
                      (t("已解除绑定"), s());
                    }}
                  >
                    确认解除
                  </C_sp>
                </div>
              </div>
            </C_sL>
          ) : null}
        </C_si>
      );
    },
    invitePoster: function () {
      let { toast: e } = o();
      return (
        <C_si
          title="邀请成员"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} onClick={() => e("海报已保存至相册")}>
              保存海报至相册
            </C_sp>
          }
        >
          <div className="bg-hero-wash shadow-float flex flex-col items-center gap-4 rounded-[28px] px-6 py-8 text-surface">
            <span className="text-2xl font-bold">加入我的家庭</span>
            <span className="text-sm opacity-90">阳光花园 3栋2单元-1802</span>
            <span className="flex size-48 items-center justify-center rounded-[24px] bg-surface text-ink">
              <C_tH className="size-36" strokeWidth={1.2} />
            </span>
            <span className="text-sm">扫码即可加入该房号</span>
            <span className="flex items-center gap-2 pt-2 text-xs opacity-90">
              <C_sS name="顾" size={24} />
              顾家小林 邀请你加入 · 顾好家
            </span>
          </div>
        </C_si>
      );
    },
    butler: function () {
      let { toast: e } = o();
      return (
        <C_si title="我的管家" className="bg-sub-wash">
          <C_sc className="flex items-center gap-4">
            <C_sS name="张" size={60} tone="warm" />
            <span className="flex flex-col gap-1">
              <span className="text-lg font-bold text-ink">管家 · 张姐</span>
              <span className="text-xs text-ink-2">服务楼栋：3栋2单元</span>
            </span>
          </C_sc>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>联系方式</C_sd>
            </div>
            {[
              ["管家电话", "138****1234"],
              ["保安亭电话", "0551-6666****"],
            ].map(([s, t]) => (
              <div key={s} className="flex items-center gap-3 border-t border-hairline py-3 first:border-t-0">
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-ink">{s}</span>
                  <span className="text-xs text-ink-2 tabular-nums">{t}</span>
                </span>
                <C_sp size="sm" onClick={() => e(`正在拨打${s}`)}>
                  <C_sQ className="size-3.5" />
                  拨打
                </C_sp>
              </div>
            ))}
          </C_sc>
          <C_sc className="flex flex-col items-center gap-3 py-6">
            <C_sd>微信二维码</C_sd>
            <span className="flex size-40 items-center justify-center rounded-[20px] bg-fill text-ink">
              <C_tH className="size-28" strokeWidth={1.2} />
            </span>
            <span className="text-xs text-ink-3">长按识别二维码添加管家微信</span>
          </C_sc>
        </C_si>
      );
    },
    myBand: function () {
      let { go: e, toast: s } = o();
      return (
        <C_si title="我的手环" className="bg-sub-wash">
          <div className="bg-hero-wash shadow-float flex items-center gap-4 rounded-[24px] p-5 text-surface">
            <span className="flex size-16 items-center justify-center rounded-[20px] bg-surface/25">
              <C_s2 className="size-8" />
            </span>
            <span className="flex flex-1 flex-col gap-1">
              <span className="text-xs opacity-90">当前连接</span>
              <span className="text-xl font-bold">Mi Band 8</span>
              <span className="text-xs opacity-90">连接于 09-01 08:30</span>
            </span>
            <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-brand-deep">
              已连接
            </span>
          </div>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>设备管理</C_sd>
            </div>
            <C_so label="修改名称" desc="仅在本系统内生效" onClick={() => e("bandRename")} />
            <C_so label="历史数据" desc="心率 · 血压 · 血脂" onClick={() => e("healthData")} />
            <C_so label="更换设备" onClick={() => e("bandConnect")} />
          </C_sc>
          <C_sp block={!0} variant="danger" onClick={() => s("已断开连接")}>
            断开连接
          </C_sp>
        </C_si>
      );
    },
    bandRename: function () {
      let { back: e, toast: s } = o();
      return (
        <C_si title="修改名称" className="bg-sub-wash gap-4">
          <C_sz>该名称仅在本系统内生效，用于区分多台手环设备，不会修改手环厂商的原始名称</C_sz>
          <C_sc className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <C_s2 className="size-5" />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-[15px] font-bold text-ink">Mi Band 8</span>
              <span className="text-xs text-ink-3">设备型号 · 当前已连接</span>
            </span>
          </C_sc>
          <C_sc>
            <C_su label="设备名称" defaultValue="爸爸的手环" />
          </C_sc>
          <C_sp
            block={!0}
            onClick={() => {
              (s("已保存"), e());
            }}
          >
            保存
          </C_sp>
        </C_si>
      );
    },
    mySignup: function () {
      let { go: e } = o();
      return (
        <C_si title="我的报名" className="bg-sub-wash">
          <C_sc onClick={() => e("activityDetail")} className="flex items-center gap-3 p-2.5">
            <span className="relative h-[72px] w-[92px] shrink-0 overflow-hidden rounded-2xl">
              <eW.Image
                src="/images/act-midautumn.png"
                alt="中秋邻里联欢会"
                fill={!0}
                sizes="92px"
                className="object-cover"
              />
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-[15px] font-semibold text-ink">中秋邻里联欢会</span>
              <span className="text-xs text-ink-2">活动时间 9-28 18:30</span>
              <span className="text-[11px] text-ink-3">报名于 09-10</span>
            </span>
            <C_sh tone="teal">报名成功</C_sh>
          </C_sc>
        </C_si>
      );
    },
    myHelper: function () {
      let { go: e } = o();
      return (
        <C_si className="bg-sub-wash" nav={<C_sr title="生活帮手订单" right="+ 新需求" onRight={() => e("helper")} />}>
          {[
            {
              t: "水管维修",
              d: "提交 09-02 11:20 · 类型：维修",
              to: "orderHelperDetail",
              s: "处理中",
            },
            {
              t: "代收快递",
              d: "提交 08-28 09:10 · 类型：代办",
              to: "helperDetail",
              s: "已提交",
            },
          ].map((s) => (
            <C_sc key={s.t} onClick={() => e(s.to)} className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                <C_tB className="size-5" />
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="text-[15px] font-bold text-ink">{s.t}</span>
                <span className="text-xs text-ink-3">{s.d}</span>
              </span>
              <C_sh tone={"处理中" === s.s ? "brand" : "warm"}>{s.s}</C_sh>
            </C_sc>
          ))}
        </C_si>
      );
    },
    helperDetail: function () {
      return (
        <C_si title="需求详情" className="bg-sub-wash">
          <C_sc className="flex flex-col gap-3">
            <C_sd extra={<C_sh tone="warm">已提交</C_sh>}>提交信息</C_sd>
            <span className="text-lg font-bold text-ink">水管维修</span>
            <span className="text-xs text-ink-3">类型：维修 · 提交 09-02 11:20</span>
            <p className="rounded-2xl bg-fill p-3 text-[13px] leading-relaxed text-ink-2">
              厨房水龙头下方水管漏水，地面已有积水，麻烦尽快安排师傅上门查看。家中白天有人，可直接联系我。
            </p>
          </C_sc>
          <C_sz>需求已同步至物业后台，由楼栋管家跟进处理</C_sz>
        </C_si>
      );
    },
    hr: function () {
      let { go: e } = o();
      return (
        <C_si title="人力资源" className="bg-sub-wash">
          <div className="bg-hero-wash shadow-float flex flex-col gap-3 rounded-[24px] p-5 text-surface">
            <span className="flex items-center gap-2 text-lg font-bold">
              <C_tx className="size-5" />
              人才入驻
            </span>
            <p className="text-[13px] leading-relaxed opacity-95">
              编辑个人技能并上传凭证，提交物业审核；审核通过后资料进入小区人才库。业主的生活服务需求由物业后台匹配派单，双方线下对接交易，平台仅生成订单留痕、不做收费。
            </p>
            <button
              type="button"
              onClick={() => e("hrCertApply")}
              className="press mt-1 h-11 rounded-full bg-surface text-sm font-semibold text-brand-deep"
            >
              编辑技能与上传凭证
            </button>
            <span className="text-center text-[11px] opacity-90">提交后由物业审核，通过后进入人才库</span>
          </div>
          <C_sc onClick={() => e("hrCertView")} className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-success-soft text-success">
              <C_sG className="size-5" />
            </span>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm font-semibold text-ink">我的认证资料</span>
              <span className="text-xs text-ink-3">家电维修 · 管道疏通</span>
            </span>
            <C_sh tone="teal">已通过</C_sh>
          </C_sc>
          <C_sc onClick={() => e("hrOrderDetail")} className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <C_tB className="size-5" />
            </span>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm font-semibold text-ink">派单 · 家电维修</span>
              <span className="text-xs text-ink-3">09-21 14:00 - 16:00 · 阳光花园</span>
            </span>
            <C_sh>进行中</C_sh>
          </C_sc>
        </C_si>
      );
    },
    hrCertView: function () {
      let { go: e } = o();
      return (
        <C_si
          title="认证资料"
          className="bg-sub-wash"
          bottom={
            <C_sp block={!0} variant="outline" onClick={() => e("hrCertApply")}>
              修改认证资料
            </C_sp>
          }
        >
          <C_sc>
            <C_sd extra={<C_sh tone="teal">已通过</C_sh>}>基础资料</C_sd>
            <C_sm k="提交小区" v="翠湖小区" />
            <C_sm k="姓名" v="李建国" />
            <C_sm k="联系电话" v="138****6688" />
            <C_sm k="意向服务小区" v="阳光花园" />
            <C_sm k="服务类目" v="家电维修 · 管道疏通" />
          </C_sc>
          <C_sc>
            <C_sd>技能描述</C_sd>
            <p className="text-[13px] leading-relaxed text-ink-2">
              10 年水电维修经验，持低压电工证；擅长家电检修、管道疏通、水电安装，工具齐全，市区 30 分钟内响应。
            </p>
          </C_sc>
          <C_sc>
            <C_sd>凭证资料</C_sd>
            <div className="grid grid-cols-2 gap-2.5">
              {["低压电工证", "技能证书"].map((e) => (
                <span
                  key={e}
                  className="flex h-24 flex-col items-center justify-center gap-1.5 rounded-2xl bg-brand-mist text-brand-deep"
                >
                  <C_tk className="size-6" />
                  <span className="text-xs text-ink-2">{e}</span>
                </span>
              ))}
            </div>
          </C_sc>
        </C_si>
      );
    },
    hrCertApply: function () {
      let { back: e, toast: s } = o(),
        [t, l] = (0, c.useState)("家电维修");
      return (
        <C_si
          title="人才认证"
          className="bg-sub-wash"
          bottom={
            <C_sp
              block={!0}
              onClick={() => {
                (s("已提交，等待物业审核"), e());
              }}
            >
              提交认证
            </C_sp>
          }
        >
          <C_sz>人力资源认证无需业主认证；请先选择意向服务小区，物业将就近为您匹配派单。</C_sz>
          <C_sc className="flex flex-col gap-4">
            <C_sf label="意向服务小区" required={!0} />
            <C_su label="姓名" placeholder="请输入姓名" required={!0} />
            <C_su label="联系电话" placeholder="请输入联系电话" type="tel" required={!0} />
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-ink-2">服务类目</span>
              <C_sb items={["家电维修", "管道疏通", "家政保洁", "开锁换锁", "家具安装"]} value={t} onChange={l} />
            </div>
            <C_su label="技能描述" placeholder="请描述从业经验与擅长技能" textarea={!0} />
          </C_sc>
          <C_sc>
            <C_sk max={6} hint="上传凭证（证书 / 资质照片），如：低压电工证" />
          </C_sc>
        </C_si>
      );
    },
    hrOrderDetail: function () {
      let { back: e, toast: s } = o();
      return (
        <C_si
          title="订单详情"
          className="bg-sub-wash"
          bottom={
            <C_sp
              block={!0}
              onClick={() => {
                (s("已确认完成"), e());
              }}
            >
              确认完成
            </C_sp>
          }
        >
          <div className="bg-hero-wash shadow-float flex flex-col gap-2 rounded-[24px] p-5 text-surface">
            <div className="flex items-center justify-between text-xs">
              <span className="opacity-90 tabular-nums">#HR20250918-001</span>
              <span className="rounded-full bg-surface px-2.5 py-0.5 font-semibold text-brand-deep">进行中</span>
            </div>
            <span className="text-xl font-bold">家电维修</span>
            <span className="text-xs opacity-90">物业后台已派单，请按约定时间上门服务</span>
          </div>
          <C_sc>
            <C_sm k="上门时间" v="09-21 14:00 - 16:00" />
            <C_sm k="服务地址" v="阳光花园 3栋2单元1802" />
            <C_sm k="服务数量" v="1 · 线下收取" />
            <C_sm k="服务金额" v="¥150.00" accent={!0} />
          </C_sc>
          <C_sc className="flex items-center gap-3">
            <C_sS name="张" size={44} tone="warm" />
            <span className="flex flex-1 flex-col">
              <span className="text-sm font-semibold text-ink">下单人 · 张先生</span>
              <span className="text-xs text-ink-2 tabular-nums">13800001234</span>
            </span>
            <C_sp size="sm" onClick={() => s("正在联系业主")}>
              <C_sQ className="size-3.5" />
              联系业主
            </C_sp>
          </C_sc>
          <C_sc>
            <C_sd>附件资料</C_sd>
            <div className="flex gap-2.5">
              <span className="flex size-16 items-center justify-center rounded-2xl bg-brand-mist text-brand-deep">
                <C_tk className="size-5" />
              </span>
              <span className="flex size-16 items-center justify-center rounded-2xl bg-ink text-surface">
                <C_sn className="size-5" />
              </span>
            </div>
          </C_sc>
          <C_sc>
            <C_sd>金额信息</C_sd>
            <C_sm k="订单金额" v="¥150.00" />
            <C_sm k="收款方式" v="线上不做收款，服务金额由线下收取" />
          </C_sc>
          <C_sc>
            <C_sd>订单日志</C_sd>
            <C_s_
              items={[
                {
                  title: "订单提交",
                  time: "09-18 10:20",
                  state: "done",
                },
                {
                  title: "接单",
                  time: "09-18 11:05",
                  state: "doing",
                },
              ]}
            />
          </C_sc>
          <C_sc>
            <C_sd extra={<span className="text-xs text-ink-3">0/6</span>}>完成凭证</C_sd>
            <C_sk max={6} hint="请上传服务完成后的现场照片（最多 6 张），作为订单完成凭证。" />
          </C_sc>
        </C_si>
      );
    },
    sysMsg: function () {
      let { go: e, toast: s } = o(),
        [t, l] = (0, c.useState)("订单"),
        [a, n] = (0, c.useState)(!1);
      return (
        <C_si
          className="bg-sub-wash"
          nav={
            <C_sr
              title="系统消息"
              right="一键已读"
              onRight={() => {
                (n(!0), s("已全部标为已读"));
              }}
            />
          }
        >
          <C_sj items={["订单", "账单"]} value={t} onChange={l} />
          {"账单" === t
            ? tBillMsgs.map((m) => (
                <C_sc
                  key={m.title}
                  onClick={() => {
                    sysMsgCurrent = m;
                    e("sysMsgDetail");
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="relative flex size-11 items-center justify-center rounded-2xl bg-success-soft text-success">
                    <C_tq className="size-5" />
                    {m.unread && !a ? (
                      <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-danger ring-2 ring-surface" />
                    ) : null}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="truncate text-[15px] font-semibold text-ink">{m.title}</span>
                    <span className="text-xs text-ink-3 tabular-nums">{m.time}</span>
                  </span>
                  {m.amount ? (
                    <span className="text-sm font-bold text-ink tabular-nums">{m.amount}</span>
                  ) : null}
                  <C_e$ className="size-4 text-ink-3" />
                </C_sc>
              ))
            : null}
          {"订单" === t && tJ.map(([s, t, l]) => (
            <C_sc
              key={s}
              onClick={() => {
                sysMsgCurrent = null;
                e("sysMsgDetail");
              }}
              className="flex items-center gap-3"
            >
              <span className="relative flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                <C_tq className="size-5" />
                {l && !a ? (
                  <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-danger ring-2 ring-surface" />
                ) : null}
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-ink">{s}</span>
                <span className="text-xs text-ink-3 tabular-nums">{t}</span>
              </span>
              <C_e$ className="size-4 text-ink-3" />
            </C_sc>
          ))}
        </C_si>
      );
    },
    sysMsgDetail: function () {
      let { go: e } = o(),
        m = sysMsgCurrent;
      if (m)
        return (
          <C_si
            title="消息详情"
            className="bg-sub-wash"
            bottom={
              <C_sp block={!0} onClick={() => e(m.route)}>
                {"bill" === m.route ? "查看我的账单" : "查看账单详情"}
              </C_sp>
            }
          >
            <C_sc className="flex flex-col gap-3">
              <C_sh tone="teal" className="w-fit">
                账单
              </C_sh>
              <h2 className="text-lg font-bold text-ink text-pretty">{m.heading}</h2>
              <span className="text-xs text-ink-3 tabular-nums">{m.time}</span>
              {m.body.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-ink-2">
                  {p}
                </p>
              ))}
            </C_sc>
            <C_sC>左右滑动可切换其他消息</C_sC>
          </C_si>
        );
      return (
        <C_si title="消息详情" className="bg-sub-wash">
          <C_sc className="flex flex-col gap-3">
            <C_sh className="w-fit">订单</C_sh>
            <h2 className="text-lg font-bold text-ink">您的陪诊单已下单成功</h2>
            <span className="text-xs text-ink-3">09-29 10:20</span>
            <p className="text-sm leading-relaxed text-ink-2">
              您为「顾家小林」预约的体检陪诊服务（整天）已下单成功，陪诊员将于服务当天上午 8:30
              到达小区南门接人，全程陪同前往医院体检。
            </p>
            <p className="text-sm leading-relaxed text-ink-2">您可在「订单」中查看陪诊单详情。</p>
          </C_sc>
          <C_sC>左右滑动可切换其他消息</C_sC>
        </C_si>
      );
    },
    settings: function () {
      let { go: e, reset: s, toast: t } = o(),
        [l, a] = (0, c.useState)(!1);
      return (
        <C_si title="系统设置" className="bg-sub-wash">
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>协议与隐私</C_sd>
            </div>
            <C_so
              icon={<C_st className="size-4" />}
              label="关于我们"
              desc="平台介绍与版本信息"
              onClick={() => e("about")}
            />
            <C_so
              icon={<C_s0 className="size-4" />}
              label="隐私设置"
              desc="授权管理与个人信息"
              onClick={() => e("privacy")}
            />
            <C_so icon={<C_sG className="size-4" />} label="用户协议" onClick={() => e("agreement")} />
            <C_so icon={<C_sG className="size-4" />} label="隐私政策" onClick={() => e("privacy")} />
          </C_sc>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>通用</C_sd>
            </div>
            <C_so label="清除缓存" desc="清理图片与临时文件" value="36.2MB" onClick={() => t("缓存已清除")} />
            <C_so label="检查更新" desc="当前已是最新版本" value="v1.0.339" />
          </C_sc>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>关于与账号</C_sd>
            </div>
            <C_so
              icon={<C_tW className="size-4" />}
              label="退出登录"
              desc="退出后需重新登录使用"
              onClick={() => a(!0)}
            />
            <C_so
              icon={<C_tF className="size-4" />}
              label="注销账号"
              desc="注销后账号数据将无法恢复"
              onClick={() => e("delAccount")}
            />
          </C_sc>
          {l ? (
            <C_sL onClose={() => a(!1)}>
              <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-lg font-bold text-ink">退出登录</p>
                <p className="text-sm text-ink-2">确定要退出当前账号吗？</p>
                <div className="flex w-full gap-3 pt-2">
                  <C_sp block={!0} variant="ghost" onClick={() => a(!1)}>
                    取消
                  </C_sp>
                  <C_sp block={!0} onClick={() => s("welcome")}>
                    退出
                  </C_sp>
                </div>
              </div>
            </C_sL>
          ) : null}
        </C_si>
      );
    },
    delAccount: function () {
      let { go: e, back: s } = o();
      return (
        <C_si title="注销账号" className="bg-sub-wash items-center gap-6 px-6 text-center">
          <div className="flex flex-col items-center gap-4 pt-10">
            <span className="flex size-20 items-center justify-center rounded-full bg-danger-soft text-danger">
              <C_e3 className="size-10" strokeWidth={1.6} />
            </span>
            <p className="text-xl font-bold text-ink">注销账号</p>
            <p className="text-sm leading-relaxed text-ink-2">注销后账号数据将无法恢复，确定要注销吗？</p>
          </div>
          <div className="flex w-full flex-col gap-3">
            <C_sp block={!0} onClick={s}>
              再想想
            </C_sp>
            <C_sp block={!0} variant="danger" onClick={() => e("delVerify")}>
              确认注销
            </C_sp>
          </div>
        </C_si>
      );
    },
    delVerify: function () {
      let { reset: e, toast: s } = o();
      return (
        <C_si title="注销账号" className="bg-sub-wash gap-4">
          <C_sc className="flex flex-col gap-1">
            <span className="text-xs text-ink-3">验证手机号</span>
            <span className="text-2xl font-bold text-ink tabular-nums">138****6688</span>
          </C_sc>
          <C_sR />
          <C_sp
            block={!0}
            variant="danger"
            onClick={() => {
              (s("账号已注销"), e("welcome"));
            }}
          >
            确认注销
          </C_sp>
        </C_si>
      );
    },
    about: function () {
      let { go: e } = o();
      return (
        <C_si title="关于我们" className="bg-sub-wash">
          <div className="flex flex-col items-center gap-2 py-6">
            <span className="bg-brand-gradient shadow-float flex size-20 items-center justify-center rounded-[26px] text-surface">
              <C_e0 className="size-10" strokeWidth={1.6} />
            </span>
            <span className="text-xl font-bold text-ink">顾好家</span>
            <span className="text-xs text-ink-3">当前版本 v1.0.339</span>
          </div>
          <C_sc>
            <p className="text-[13px] leading-relaxed text-ink-2">
              顾好家是面向社区居民的一站式生活服务平台，围绕健康、膳食、托管、陪诊与生活帮手等日常需求，联合物业与社区服务资源，为业主提供便捷、可信的社区服务体验。
            </p>
          </C_sc>
          <C_sc className="flex flex-col py-1">
            <div className="pt-3">
              <C_sd>版本与协议</C_sd>
            </div>
            <C_so label="版本号" value="v1.0.339" />
            <C_so label="用户协议" onClick={() => e("agreement")} />
            <C_so label="隐私政策" onClick={() => e("privacy")} />
          </C_sc>
        </C_si>
      );
    },
    agreement: () => (
      <C_tQ
        title="用户协议"
        head="顾好家用户服务协议"
        items={[
          ["一、协议的接受", "当您注册、登录或使用顾好家 APP 的任一服务，即视为您已阅读并同意本协议全部条款。"],
          ["二、账号与安全", "账号仅限本人使用，请妥善保管登录凭证；因个人保管不当造成的损失由用户自行承担。"],
          ["三、社区服务规范", "您通过本平台发布的内容不得违反法律法规及社区公约，平台有权对违规内容进行处理。"],
          ["四、服务的变更与中止", "平台有权根据运营需要对服务内容进行调整、中止或终止，并提前予以公告。"],
          ["五、免责声明", "因不可抗力、网络故障等原因导致服务无法正常提供的，平台不承担相应责任。"],
        ]}
      />
    ),
    privacy: () => (
      <C_tQ
        title="隐私政策"
        head="顾好家隐私政策"
        items={[
          ["一、我们收集的信息", "为提供报餐、托管、生活帮手等服务，我们会收集您的手机号码、房号、订单与账单信息。"],
          ["二、信息的使用", "收集的信息仅用于服务提供、订单履约、账单结算与服务通知，不用于任何无关用途。"],
          ["三、信息的存储与保护", "您的信息存储于境内服务器，采用加密传输与访问控制等安全措施防止泄露。"],
          ["四、信息的共享", "除法律法规要求或经您明确同意外，我们不会向任何第三方共享您的个人信息。"],
          ["五、您的权利", "您可在「我的-个人信息」中查阅、更正您的个人信息，也可联系客服申请删除账号数据。"],
        ]}
      />
    ),
  },
  tY = {
    home: eK,
    ...sH,
    ...tc,
    ...tN,
    ...tD,
    ...tX,
  },
  tK = [
    {
      group: "登录与认证",
      ids: Object.keys(sH),
    },
    {
      group: "首页与服务",
      ids: ["home", ...Object.keys(tc)],
    },
    {
      group: "社区",
      ids: Object.keys(tN),
    },
    {
      group: "订单与支付",
      ids: Object.keys(tD),
    },
    {
      group: "我的",
      ids: Object.keys(tX),
    },
  ],
  t0 = {
    home: "首页",
    welcome: "登录",
    login: "账号登录",
    certReject2: "驳回详情",
    bandConnecting: "手环连接中",
    regProfile: "完善资料",
    findPwd: "找回密码",
    wechatLogin: "微信授权",
    wechatBind: "绑定手机号",
    wechatFail: "微信未绑定",
    certify: "房屋认证",
    certList: "我的认证",
    certReject: "驳回原因",
    communitySwitch: "切换小区",
    healthHome: "健康小屋",
    bandConnect: "连接手环",
    healthData: "健康数据",
    healthCompare: "数据对比",
    healthReport: "检测报告",
    healthRisk: "风险评估",
    healthTrend: "健康趋势",
    reportDetail: "报告详情",
    riskReport: "完整评估报告",
    riskFactor: "风险因素",
    careInfo: "关爱服务",
    careOrder: "关爱下单",
    callMine: "一键呼叫",
    escortList: "陪诊服务",
    escortDetail: "陪诊详情",
    escortBook: "陪诊预约",
    trusteeship: "托管服务",
    trustDetail: "托管详情",
    mealDetail: "膳食详情",
    meal: "膳食下单",
    miniJump: "物业服务",
    helperList: "生活帮手",
    helperInfo: "帮手详情",
    helper: "提交需求",
    community: "社区",
    communityList: "社区活动",
    activityFilter: "筛选活动",
    activityDetail: "活动详情",
    activitySignup: "活动报名",
    noticeList: "社区通知",
    noticeDetail: "通知详情",
    featuredList: "小区资讯",
    articleDetail: "资讯详情",
    moneyBag: "小区钱袋子",
    orders: "报餐单",
    ordersTrust: "托管单",
    ordersEscort: "陪诊单",
    ordersHelper: "帮手单",
    orderSearch: "搜索订单",
    orderMealDetail: "报餐单详情",
    orderTrustDetail: "托管单详情",
    orderEscortDetail: "陪诊单详情",
    orderHelperDetail: "帮手单详情",
    orderSettlement: "订单结算",
    review: "服务评价",
    addReview: "添加评价",
    refund: "退款申请",
    refundProgress: "退款进度",
    payment: "收银台",
    payResult: "支付结果",
    profile: "我的",
    personInfo: "个人信息",
    editProfile: "编辑资料",
    changePhone: "换绑手机",
    coin: "顾好家币",
    coinRecharge: "账户充值",
    coinDetail: "账户明细",
    bill: "我的账单",
    billDetail: "账单详情",
    propBackend: "物业后台",
    propRoomQuota: "房号额度",
    family: "我的家庭",
    familyMembers: "成员列表",
    memberRole: "成员设置",
    invitePoster: "邀请海报",
    butler: "我的管家",
    myBand: "我的手环",
    bandRename: "手环改名",
    mySignup: "我的报名",
    myHelper: "帮手订单",
    helperDetail: "需求详情",
    hr: "人力资源",
    hrCertView: "认证资料",
    hrCertApply: "人才认证",
    hrOrderDetail: "派单详情",
    sysMsg: "系统消息",
    sysMsgDetail: "消息详情",
    settings: "系统设置",
    delAccount: "注销账号",
    delVerify: "注销验证",
    about: "关于我们",
    agreement: "用户协议",
    privacy: "隐私政策",
  };
function C_t1() {
  let { cur: e, toastMsg: s } = o(),
    C_t = tY[e] ?? eK;
  return (
    <C_eS label="顾好家 APP">
      <C_eP className={"home" === e ? "bg-[#ffe9c6]" : void 0} />
      <div key={e} className="screen-in absolute inset-0">
        <C_t />
      </div>
      {e in eO ? <C_eA /> : null}
      {s ? (
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-40 flex justify-center">
          <span className="rounded-full bg-shell/85 px-4 py-2 text-sm text-surface backdrop-blur">{s}</span>
        </div>
      ) : null}
    </C_eS>
  );
}
function C_t2() {
  let { cur: e, jump: s } = o();
  return (
    <nav aria-label="页面目录" className="flex flex-col gap-5">
      {tK.map((t) => (
        <div key={t.group} className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 text-sm font-bold text-ink">
            <span className="h-3.5 w-1 rounded-full bg-brand" aria-hidden="true" />
            {t.group}
            <span className="text-xs font-normal text-ink-3">{t.ids.length}</span>
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {t.ids.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => s(t)}
                className={eb(
                  "press rounded-full px-3 py-1.5 text-xs",
                  e === t ? "bg-brand-gradient font-semibold text-surface" : "shadow-card bg-surface text-ink-2",
                )}
              >
                {t0[t] ?? t}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

export {
  C_d as RouterProvider,
  o as useRouter,
  tY as screens,
  tK as screenGroups,
  t0 as screenTitles,
  eO as tabRoutes,
  C_eS as PhoneFrame,
  C_eP as StatusBar,
  C_eA as BottomNav,
  C_t2 as ScreenDirectory,
  eQ as serviceRoutes,
  eX as bannerRoutes,
};
