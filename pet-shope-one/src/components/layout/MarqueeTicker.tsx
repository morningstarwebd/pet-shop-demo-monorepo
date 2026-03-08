export default function MarqueeTicker() {
    const tickerText =
        "🐾 CERTIFIED BREEDS  •  PAN INDIA DELIVERY  •  FREE GROOMING WITH FIRST PET  •  RAZORPAY EMI  •  24/7 WHATSAPP SUPPORT  •  4.9★ RATED  •  ";

    return (
        <div
            className="relative overflow-hidden"
            style={{
                background: "var(--terra-500)",
                height: "44px",
            }}
        >
            <div className="animate-marquee flex h-full items-center whitespace-nowrap">
                {/* Repeat 4 times for seamless loop */}
                {[...Array(4)].map((_, i) => (
                    <span
                        key={i}
                        className="mx-0 inline-block"
                        style={{
                            fontFamily: "var(--nk-font-body)",
                            fontWeight: 600,
                            fontSize: "13px",
                            color: "white",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {tickerText}
                    </span>
                ))}
            </div>
        </div>
    );
}
