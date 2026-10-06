import type { CollectionProduct } from "@/data/lab";

/** Original SVG concept illustrations. These do not depict actual stock or client products. */
export default function ProductIllustration({
  product,
  className = "",
}: {
  product: CollectionProduct;
  className?: string;
}) {
  return (
    <svg
      className={`lab-product-art ${className}`}
      viewBox="0 0 500 420"
      role="img"
      aria-label={`Original concept illustration of ${product.name}`}
    >
      <ellipse
        cx="255"
        cy="345"
        rx="130"
        ry="15"
        fill="#191B23"
        opacity=".08"
      />
      {product.shape === "tote" ? (
        <g>
          <path
            d="M129 173 342 145 381 311 171 346 125 317Z"
            fill={product.colour}
          />
          <path
            d="M129 173 169 195 171 346 125 317Z"
            fill="#000"
            opacity=".15"
          />
          <path d="m169 195 173-50 39 166-210 35Z" fill="#FFF" opacity=".13" />
          <path
            d="M180 176 173 130Q170 78 214 73Q258 66 266 118L274 164"
            fill="none"
            stroke="#1E2530"
            strokeWidth="15"
          />
          <path
            d="M234 169 230 125Q227 73 269 69Q310 65 318 114L326 151"
            fill="none"
            stroke={product.colour}
            strokeWidth="17"
          />
          <path
            d="m181 208 165-37M182 324l176-29"
            stroke="#FFF"
            opacity=".22"
            strokeWidth="1.5"
          />
          <path d="m277 277 12-2 2 12-12 2Z" fill="#D5C7A9" />
          <path d="M240 291 310 279" stroke="#000" opacity=".1" />
        </g>
      ) : product.shape === "cuff" ? (
        <g transform="rotate(-22 250 225)">
          <ellipse cx="250" cy="225" rx="116" ry="78" fill={product.colour} />
          <ellipse cx="250" cy="211" rx="89" ry="48" fill="#BFB7A5" />
          <ellipse cx="250" cy="205" rx="89" ry="43" fill="#E7E4DD" />
          <path
            d="M137 231q15 94 125 82 101-8 103-83-27 64-117 63-86-2-111-62Z"
            fill={product.colour}
          />
          <path
            d="M147 235q30 64 113 56 78-9 97-58"
            stroke="#FFF"
            opacity=".38"
            fill="none"
            strokeWidth="3"
          />
          <path d="M278 153 310 165 289 225 265 216Z" fill="#E7E4DD" />
          <path d="M278 153 265 216l-6-7 12-58Z" fill="#FFF" opacity=".45" />
        </g>
      ) : (
        <g>
          <path
            d="m121 197 208-41 54 160-224 28-51-32Z"
            fill={product.colour}
          />
          <path d="m121 197 38 35 224-34-54-42Z" fill="#FFF" opacity=".25" />
          <path d="m121 197 38 35 0 112-51-32Z" fill="#000" opacity=".15" />
          <path d="m151 213 184-33" stroke="#80745D" strokeWidth="5" />
          <path d="m153 209 181-31" stroke="#DED3BD" strokeWidth="2" />
          <path d="m329 178 20 23-6 14-18-24Z" fill="#B5A382" />
          <path
            d="m174 253 156-24m-148 81 164-22"
            stroke="#FFF"
            opacity=".16"
            strokeWidth="1.5"
          />
        </g>
      )}
      <text
        x="30"
        y="390"
        fill="#60616A"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="2"
      >
        FORM / FICTIONAL COLLECTION
      </text>
    </svg>
  );
}
