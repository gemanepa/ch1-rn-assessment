import React from 'react';
import { FlatList, View } from 'react-native';
import { Checkbox, IconButton, List, Text } from 'react-native-paper';
import Svg, { Circle, G, Line, Polygon, Rect } from 'react-native-svg';
import { CosmicColors } from '@/theme/colors';
import { Task } from '@/types/Task';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      contentContainerClassName="px-4 pb-6"
      ListEmptyComponent={
        <View className="items-center mt-8 px-4">
          <Svg width={160} height={160} viewBox="0 0 160 160">
            {/* Soft glow */}
            <Circle
              cx="80"
              cy="82"
              r="52"
              fill={CosmicColors.primary}
              opacity={0.08}
            />

            {/* Rocket — tilted 35° clockwise */}
            <G rotation={35} origin="80, 80">
              {/* Flame — outer */}
              <Polygon
                points="71,108 80,134 89,108"
                fill={CosmicColors.accent}
                opacity={0.55}
              />
              {/* Flame — inner */}
              <Polygon
                points="76,108 80,124 84,108"
                fill={CosmicColors.primary}
                opacity={0.45}
              />

              {/* Body */}
              <Rect
                x="68"
                y="50"
                width="24"
                height="58"
                rx="4"
                fill={CosmicColors.surface}
                stroke={CosmicColors.primary}
                strokeWidth="1.5"
              />

              {/* Nose cone */}
              <Polygon
                points="80,20 66,50 94,50"
                fill={CosmicColors.primary}
                opacity={0.9}
              />

              {/* Left fin */}
              <Polygon
                points="68,86 52,112 68,108"
                fill={CosmicColors.primaryLight}
                opacity={0.7}
              />
              {/* Right fin */}
              <Polygon
                points="92,86 108,112 92,108"
                fill={CosmicColors.primaryLight}
                opacity={0.7}
              />

              {/* Porthole ring */}
              <Circle
                cx="80"
                cy="68"
                r="9"
                fill={CosmicColors.card}
                stroke={CosmicColors.primaryLight}
                strokeWidth="1.5"
              />
              {/* Porthole glass */}
              <Circle
                cx="80"
                cy="68"
                r="5.5"
                fill={CosmicColors.primary}
                opacity={0.85}
              />
              {/* Porthole shine */}
              <Circle
                cx="77"
                cy="65"
                r="1.5"
                fill={CosmicColors.card}
                opacity={0.7}
              />
            </G>

            {/* Sparkle — top left */}
            <Line
              x1="32"
              y1="30"
              x2="32"
              y2="42"
              stroke={CosmicColors.primaryLight}
              strokeWidth="1.5"
              opacity={0.5}
            />
            <Line
              x1="26"
              y1="36"
              x2="38"
              y2="36"
              stroke={CosmicColors.primaryLight}
              strokeWidth="1.5"
              opacity={0.5}
            />
            <Line
              x1="27"
              y1="31"
              x2="37"
              y2="41"
              stroke={CosmicColors.primaryLight}
              strokeWidth="0.8"
              opacity={0.28}
            />
            <Line
              x1="37"
              y1="31"
              x2="27"
              y2="41"
              stroke={CosmicColors.primaryLight}
              strokeWidth="0.8"
              opacity={0.28}
            />

            {/* Sparkle — bottom right */}
            <Line
              x1="128"
              y1="118"
              x2="128"
              y2="130"
              stroke={CosmicColors.accent}
              strokeWidth="1.5"
              opacity={0.45}
            />
            <Line
              x1="122"
              y1="124"
              x2="134"
              y2="124"
              stroke={CosmicColors.accent}
              strokeWidth="1.5"
              opacity={0.45}
            />
            <Line
              x1="123"
              y1="119"
              x2="133"
              y2="129"
              stroke={CosmicColors.accent}
              strokeWidth="0.8"
              opacity={0.25}
            />
            <Line
              x1="133"
              y1="119"
              x2="123"
              y2="129"
              stroke={CosmicColors.accent}
              strokeWidth="0.8"
              opacity={0.25}
            />

            {/* Floating circles */}
            <Circle
              cx="138"
              cy="44"
              r="5"
              fill={CosmicColors.accent}
              opacity={0.18}
            />
            <Circle
              cx="20"
              cy="100"
              r="3.5"
              fill={CosmicColors.primary}
              opacity={0.15}
            />
            <Circle
              cx="142"
              cy="90"
              r="4"
              fill={CosmicColors.primaryLight}
              opacity={0.13}
            />

            {/* Star dots */}
            <Circle
              cx="50"
              cy="22"
              r="2"
              fill={CosmicColors.primaryLight}
              opacity={0.55}
            />
            <Circle
              cx="118"
              cy="32"
              r="1.5"
              fill={CosmicColors.accent}
              opacity={0.5}
            />
            <Circle
              cx="22"
              cy="58"
              r="2"
              fill={CosmicColors.primary}
              opacity={0.45}
            />
            <Circle
              cx="148"
              cy="64"
              r="1.5"
              fill={CosmicColors.primaryLight}
              opacity={0.4}
            />
            <Circle
              cx="110"
              cy="140"
              r="2"
              fill={CosmicColors.accent}
              opacity={0.4}
            />
            <Circle
              cx="38"
              cy="138"
              r="1.5"
              fill={CosmicColors.primaryLight}
              opacity={0.35}
            />
          </Svg>
          <Text className="text-center mt-3 text-cosmic-textPrimary text-[18px] font-bold tracking-[0.3px]">
            No tasks yet
          </Text>
          <Text className="text-center mt-1 text-cosmic-primary text-[13px] font-medium tracking-[0.5px] opacity-70">
            Add one above to get started
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <View
          className={`bg-cosmic-card border rounded-[4px] mb-2 ${item.completed ? 'border-cosmic-cardBorder' : 'border-cosmic-inputBorder'}`}
          style={{
            shadowColor: CosmicColors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <List.Item
            title={item.description}
            titleStyle={
              item.completed
                ? {
                    textDecorationLine: 'line-through',
                    color: CosmicColors.textMuted,
                  }
                : { color: CosmicColors.textPrimary }
            }
            onPress={() => onToggle(item.id)}
            left={() => (
              <View className="ml-3 -mr-3 justify-center">
                <Checkbox.Android
                  testID={`toggle-${item.id}`}
                  status={item.completed ? 'checked' : 'unchecked'}
                  onPress={() => onToggle(item.id)}
                  color={CosmicColors.primaryLight}
                  uncheckedColor={CosmicColors.textMuted}
                />
              </View>
            )}
            right={() => (
              <IconButton
                testID={`delete-${item.id}`}
                icon="trash-can-outline"
                iconColor={CosmicColors.danger}
                size={20}
                onPress={() => onDelete(item.id)}
                className="bg-red-500/10 rounded-lg"
              />
            )}
          />
        </View>
      )}
    />
  );
}
