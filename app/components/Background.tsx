import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Circle, Line, Polygon } from 'react-native-svg';
import { CosmicColors } from '@/theme/colors';

export default function Background() {
  return (
    <Svg
      viewBox="0 0 390 844"
      preserveAspectRatio="xMidYMid slice"
      style={StyleSheet.absoluteFillObject}
      pointerEvents="none"
    >
      {/* Layer 1: Radial gradient blobs (simulated with large low-opacity circles) */}
      <Circle
        cx="60"
        cy="120"
        r="180"
        fill={CosmicColors.primary}
        opacity={0.12}
      />
      <Circle
        cx="330"
        cy="720"
        r="160"
        fill={CosmicColors.accent}
        opacity={0.1}
      />
      <Circle
        cx="195"
        cy="420"
        r="140"
        fill={CosmicColors.primaryLight}
        opacity={0.06}
      />

      {/* Layer 2: Large rings */}
      <Circle
        cx="60"
        cy="120"
        r="220"
        fill="none"
        stroke={CosmicColors.primary}
        strokeWidth="1.5"
        opacity={0.2}
      />
      <Circle
        cx="330"
        cy="720"
        r="200"
        fill="none"
        stroke={CosmicColors.accent}
        strokeWidth="1.5"
        opacity={0.18}
      />
      <Circle
        cx="195"
        cy="844"
        r="160"
        fill="none"
        stroke={CosmicColors.primaryLight}
        strokeWidth="1"
        opacity={0.16}
      />

      {/* Layer 3: Filled circles scattered */}
      <Circle
        cx="340"
        cy="80"
        r="28"
        fill={CosmicColors.primaryLight}
        opacity={0.08}
      />
      <Circle
        cx="20"
        cy="400"
        r="20"
        fill={CosmicColors.accent}
        opacity={0.1}
      />
      <Circle
        cx="370"
        cy="400"
        r="14"
        fill={CosmicColors.primary}
        opacity={0.09}
      />
      <Circle
        cx="80"
        cy="700"
        r="22"
        fill={CosmicColors.primaryLight}
        opacity={0.07}
      />
      <Circle
        cx="300"
        cy="200"
        r="16"
        fill={CosmicColors.accent}
        opacity={0.09}
      />

      {/* Layer 4: Dot grid 9×16 */}
      {Array.from({ length: 9 }, (_, col) =>
        Array.from({ length: 16 }, (_, row) => (
          <Circle
            key={`dot-${col}-${row}`}
            cx={24 + col * 43}
            cy={30 + row * 52}
            r={1.2}
            fill={CosmicColors.primaryLight}
            opacity={0.22}
          />
        )),
      )}

      {/* Layer 5: Starburst lines — 8-ray at 3 positions */}
      {[
        { cx: 300, cy: 110, len: 12 },
        { cx: 70, cy: 580, len: 22 },
        { cx: 195, cy: 760, len: 18 },
      ].map(({ cx, cy, len }, i) =>
        Array.from({ length: 8 }, (_, ray) => {
          const angle = (ray * Math.PI) / 4;
          return (
            <Line
              key={`burst-${i}-${ray}`}
              x1={cx}
              y1={cy}
              x2={cx + Math.cos(angle) * len}
              y2={cy + Math.sin(angle) * len}
              stroke={CosmicColors.primaryLight}
              strokeWidth="1"
              opacity={0.2}
            />
          );
        }),
      )}

      {/* Layer 6: Floating triangles */}
      <Polygon
        points="50,60 70,100 30,100"
        fill={CosmicColors.primary}
        opacity={0.18}
      />
      <Polygon
        points="350,300 370,340 330,340"
        fill="none"
        stroke={CosmicColors.accent}
        strokeWidth="1.2"
        opacity={0.22}
      />
      <Polygon
        points="120,750 145,790 95,790"
        fill={CosmicColors.primaryLight}
        opacity={0.12}
      />
      <Polygon
        points="300,500 325,540 275,540"
        fill="none"
        stroke={CosmicColors.primary}
        strokeWidth="1"
        opacity={0.2}
      />
      <Polygon
        points="20,200 40,235 0,235"
        fill={CosmicColors.accent}
        opacity={0.14}
      />
      <Polygon
        points="360,620 380,655 340,655"
        fill={CosmicColors.primaryLight}
        opacity={0.1}
      />

      {/* Layer 7: Cross/plus sparkles */}
      {[
        { cx: 110, cy: 160 },
        { cx: 280, cy: 470 },
        { cx: 55, cy: 800 },
      ].map(({ cx, cy }, i) => (
        <React.Fragment key={`sparkle-${i}`}>
          <Line
            x1={cx - 8}
            y1={cy}
            x2={cx + 8}
            y2={cy}
            stroke={CosmicColors.primaryLight}
            strokeWidth="1.5"
            opacity={0.35}
          />
          <Line
            x1={cx}
            y1={cy - 8}
            x2={cx}
            y2={cy + 8}
            stroke={CosmicColors.primaryLight}
            strokeWidth="1.5"
            opacity={0.35}
          />
          <Line
            x1={cx - 5}
            y1={cy - 5}
            x2={cx + 5}
            y2={cy + 5}
            stroke={CosmicColors.primaryLight}
            strokeWidth="0.8"
            opacity={0.22}
          />
          <Line
            x1={cx + 5}
            y1={cy - 5}
            x2={cx - 5}
            y2={cy + 5}
            stroke={CosmicColors.primaryLight}
            strokeWidth="0.8"
            opacity={0.22}
          />
        </React.Fragment>
      ))}

      {/* Layer 8: Star dots */}
      <Circle
        cx={160}
        cy={95}
        r={2.5}
        fill={CosmicColors.primaryLight}
        opacity={0.5}
      />
      <Circle
        cx={310}
        cy={260}
        r={2}
        fill={CosmicColors.accent}
        opacity={0.45}
      />
      <Circle
        cx={240}
        cy={600}
        r={2.5}
        fill={CosmicColors.primaryLight}
        opacity={0.4}
      />
      <Circle cx={40} cy={480} r={2} fill={CosmicColors.accent} opacity={0.5} />
      <Circle
        cx={355}
        cy={530}
        r={2.5}
        fill={CosmicColors.primary}
        opacity={0.45}
      />
      <Circle
        cx={130}
        cy={680}
        r={2}
        fill={CosmicColors.primaryLight}
        opacity={0.5}
      />
    </Svg>
  );
}
