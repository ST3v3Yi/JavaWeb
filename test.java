import org.junit.Test;

import java.util.*;

public class test {
    @Test
    public void jusTest(){
        int[][] intervals = {{1,3},{2,6},{5,10},{7,18}};
        int start = 0, end = 1;
        int n = intervals.length;
        for (int i = 0; i < intervals.length-1; i++){
            if (intervals[i][end] >= intervals[i+1][start]){
                intervals[i][end] = intervals[i+1][end];
                n--;
            }
        }
        System.out.println(Arrays.deepToString(intervals));
        System.out.println(n);
    }
}
